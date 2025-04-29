import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import ZoomIn from '../components/animations/ZoomIn';
import { Download, Mail, Phone } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import avatar from '../assets/image/avatar.jpg'
import ShinyText from '../components/ShinyText';
import TypedText from '../components/TypedText';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';

interface HomeProps {
  darkMode?: boolean;
}
const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handlePrint = useReactToPrint({

  });

  const handleEmailClick = () => {
    const mailtoLink = 'mailto:quyennv3007@gmail.com?subject=CV Inquiry from website&body=Hello, I viewed your CV website and would like to connect with you regarding an opportunity.';
    window.open(mailtoLink, '_blank');
  };
  const handlePhoneCall = () => {
    const telLink = 'tel:0368395871';
    window.open(telLink, '_blank');
  };

  const scrollToSection = (id: string) => {
    const isHomePage = location.pathname === '/';

    if (!isHomePage) {
      // If not on homepage, navigate to homepage with hash
      navigate(`/${id}`);
      return;
    }
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
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <ZoomIn>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-64 h-64"
          >
            {/* Blue accent shape */}
            <motion.div
              className="absolute border border-cyan-500 w-64 h-64 rounded-2xl -bottom-5 -right-5 z-0"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute border border-cyan-500 w-32 h-32 rounded-2xl -top-5 -left-5 z-0"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main photo container with overflow hidden */}
            <motion.div className="absolute inset-0 z-10 overflow-hidden rounded-xl"
              initial={{ pathLength: 0 }}
              animate={{
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={avatar}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </motion.div>

            {/* Rectangular frame */}
            <motion.div
              className="absolute inset-0 z-20 border-4 border-white rounded-xl "
              initial={{ pathLength: 0 }}
              animate={{
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </ZoomIn>

        <div>
          <FadeIn delay={0.2} direction="right">
            <p className="text-xl md:text-2xl mb-2 font-semibold bg-gradient-to-r from-gray-500 to-gray-900 text-transparent bg-clip-text dark:text-white/70 ">{t('greeting.hello')}</p>
            <ShinyText
              text="Nguyễn Văn Quyên"
              disabled={false}
              speed={3}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r dark:text-white/40 text-gray-900/60 bg-clip-text mb-4 py-2"
              shineColor={darkMode ? "rgba(255, 255, 255, 1)" : "rgba(17, 24, 39, 1)"}
            />
          </FadeIn>

          <FadeIn delay={0.5} direction="right">
            <p className="text-2xl md:text-2xl font-semibold mb-4 ">
              <span className='text-gray-600 dark:text-white/70 '>{t('greeting.intro')} </span>
              <TypedText
                strings={[`${t('hero.title')}`]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                loop={true}
                className="font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 text-transparent bg-clip-text"
              />
            </p>
          </FadeIn>

          <FadeIn delay={0.8} direction="right" className="flex gap-4 mb-6 justify-center md:justify-start">
            <motion.a href="https://www.facebook.com/nguyen.van.quyen.678958" target='_blank' whileHover={{ scale: 1.1 }} className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500">
              <span className="sr-only">Facebook</span>
              <FaFacebook size={18} />
            </motion.a>
            <motion.a href="#" onClick={handleEmailClick} whileHover={{ scale: 1.1 }} className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500">
              <span className="sr-only">Email</span>
              <Mail size={18} />
            </motion.a>
            <motion.a href="#" onClick={handlePhoneCall} whileHover={{ scale: 1.1 }} className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500">
              <span className="sr-only">Phone</span>
              <Phone size={18} />
            </motion.a>
            <motion.a href="https://github.com/quyennv3007?tab=overview&from=2025-04-01&to=2025-04-29" target='_blank' whileHover={{ scale: 1.1 }} className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500">
              <span className="sr-only">github</span>
              <FaGithub size={18} />
            </motion.a>
          </FadeIn>
          <div className='flex gap-4'>

            <FadeIn delay={0.2} direction="left">
              <motion.button
                onClick={handlePrint}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-white"
                >
                  <Download size={20} />
                </motion.div>
                <span className="font-medium">{t('contact.downloadCV')}</span>
              </motion.button>

            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <motion.button
                onClick={()=>scrollToSection('contact')}
                className="flex items-center justify-center gap-3 border-cyan-500 border-2 text-cyan-500 px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-white"
                >
                  <Mail size={20} className='text-cyan-500'/>
                </motion.div>
                <span className="font-medium">{t('contact.title')}</span>
              </motion.button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;