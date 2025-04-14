import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2 dark:text-white">John Doe</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">{t('hero.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t('hero.subtitle')}</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="mailto:john@example.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Phone size={20} />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;