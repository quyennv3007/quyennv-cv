import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import Stagger from '../components/animations/Stagger';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills = {
    frontend: ['ReactJS', 'Redux', 'TypeScript', 'Material UI', 'Ant Design'],
    backend: ['NestJS', 'Node.js', 'RESTful APIs'],
    tools: ['Git', 'Figma', 'Postman', 'VS Code']
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('skills.title')}</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.2} direction="left">
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">{t('skills.frontend')}</h3>
              <Stagger className="grid grid-cols-2 gap-4" delay={0.3} staggerDelay={0.1}>
                {skills.frontend.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-gray-800 dark:text-gray-200 text-center">{skill}</p>
                  </motion.div>
                ))}
              </Stagger>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">{t('skills.backend')}</h3>
              <Stagger className="grid grid-cols-2 gap-4" delay={0.5} staggerDelay={0.1}>
                {skills.backend.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-gray-800 dark:text-gray-200 text-center">{skill}</p>
                  </motion.div>
                ))}
              </Stagger>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} direction="right">
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">{t('skills.tools')}</h3>
              <Stagger className="grid grid-cols-2 gap-4" delay={0.7} staggerDelay={0.1}>
                {skills.tools.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-gray-800 dark:text-gray-200 text-center">{skill}</p>
                  </motion.div>
                ))}
              </Stagger>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Skills;