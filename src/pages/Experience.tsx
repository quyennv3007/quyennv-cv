import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{t('experience.title')}</h2>
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            {t('experience.current.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {t('experience.current.company')} • {t('experience.current.period')}
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {t('experience.current.responsibilities', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;