import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{t('education.title')}</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {t('education.degree')}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {t('education.school')} • {t('education.period')}
        </p>
      </div>
    </section>
  );
};

export default Education;