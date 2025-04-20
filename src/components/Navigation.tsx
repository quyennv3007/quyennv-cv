import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsBackpack4Fill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
interface NavigationProps {
  darkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home'), icon: IoIosHome },
    { id: 'about', label: t('nav.about'), icon: FaUser },
    { id: 'skills', label: t('nav.skills'), icon: RiContactsBook2Fill },
    { id: 'experience', label: t('nav.experience'), icon: BsBackpack4Fill },
    { id: 'projects', label: t('nav.projects'), icon: FaListCheck },
    // { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact'), icon: IoMail },
  ];

  useEffect(() => {
    // Only run scroll detection on the homepage
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Check if page is scrolled for navbar style
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, navItems]);

  const scrollToSection = (id: string) => {
    const isHomePage = location.pathname === '/';

    if (!isHomePage) {
      // If not on homepage, navigate to homepage with hash
      navigate(`/#${id}`);
      return;
    }

    // If already on homepage, just scroll to the section
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle URL hash for direct navigation to sections
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Extract the id from the hash (remove the # symbol)
      const id = location.hash.substring(1);

      // Small timeout to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 
      ${scrolled
        ? `md:left-1/4 md:right-1/4 md:rounded-lg md:mt-4 md:shadow-lg ${darkMode ? 'md:bg-gray-700/90' : 'md:bg-white/90'}`
        : 'bg-transparent top-4'
      }`}
    //  style={darkMode ? {backgroundColor: 'bg-gray-900'} : {backgroundColor: '#dee3e9'}}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">

          {/* Desktop menu - centered */}
          <div className="hidden md:flex space-x-6 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className={`${activeSection === item.id && location.pathname === '/'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                  {item.label}
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${activeSection === item.id && location.pathname === '/' ? 'w-full' : ''
                  }`}></span>
              </button>
            ))}
          </div>

        </div>

        {/* Mobile menu panel */}
        <div className="md:hidden">
          <div className={`fixed bottom-0 left-0 right-0 flex justify-around items-center transition-all duration-300 py-3 ${scrolled ? `bottom-4 left-2 right-2  rounded-lg shadow-lg ${darkMode ? 'bg-gray-700/90' : 'bg-white/90'}` : 'bg-transparent'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center relative group"
              >
                <span className={`${activeSection === item.id && location.pathname === '/'
                  ? 'text-blue-600 dark:text-blue-400 pb-1 transition-all duration-300'
                  : 'text-gray-700 dark:text-gray-200 pb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400  transition-all duration-300'
                  }`}>
                  {scrolled ? <item.icon size={20} className='transition-all duration-300 ' /> : null}

                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5  bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${activeSection === item.id && location.pathname === '/' ? 'w-full' : ''
                  }`}></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;