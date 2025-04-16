import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';

interface LayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ darkMode, toggleDarkMode, children }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="fixed top-0 right-0 p-4 flex gap-4 z-50">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          {i18n.language === 'en' ? 'VI' : 'EN'}
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <Sun className="text-white" /> : <Moon />}
        </button>
      </div>
      <Navigation />
      <main className="container mx-auto px-4 pt-16 max-w-4xl">
        {children}
      </main>
      <footer className="text-center py-8 text-gray-600 dark:text-gray-400">
        <p>© 2025 Nguyễn Văn Quyên. Front-end Developer.</p>
      </footer>
    </div>
  );
};

export default Layout;