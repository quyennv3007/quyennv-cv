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
    <section id="skills" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('skills.title')}</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">{t('skills.frontend')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.frontend.map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 dark:text-gray-200 text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">{t('skills.backend')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.backend.map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 dark:text-gray-200 text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">{t('skills.tools')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.tools.map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 dark:text-gray-200 text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;