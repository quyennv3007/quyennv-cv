import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('education.title')}</h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            {t('education.degree')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('education.school')} • {t('education.period')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;