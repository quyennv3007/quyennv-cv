import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills = {
    frontend: ['ReactJS', 'Redux', 'TypeScript', 'Material UI', 'Ant Design'],
    backend: ['NestJS', 'Node.js', 'RESTful APIs'],
    tools: ['Git', 'Figma', 'Postman', 'VS Code']
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">{t('skills.title')}</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('skills.frontend')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.frontend.map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-gray-800 dark:text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('skills.backend')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.backend.map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-gray-800 dark:text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('skills.tools')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.tools.map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-gray-800 dark:text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;