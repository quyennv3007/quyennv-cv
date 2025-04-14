import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('experience.title')}</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              {t('experience.current.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('experience.current.company')} • {t('experience.current.period')}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
              {t('experience.current.responsibilities', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;