import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">{t('about.title')}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-center">
          {t('about.content')}
        </p>
      </div>
    </section>
  );
};

export default About;