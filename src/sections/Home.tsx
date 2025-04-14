import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow-lg animate-fadeIn"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {t('hero.title')}
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
            {t('hero.subtitle')}
          </p>
          
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Home;