import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{t('about.title')}</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {t('about.content')}
      </p>
    </section>
  );
};

export default About;