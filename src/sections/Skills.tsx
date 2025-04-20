import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import { FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const technicalSkills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-2xl" />, percentage: 90 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-2xl" />, percentage: 90 },
    { name: 'Javascript', icon: <FaJs className="text-yellow-500 text-2xl" />, percentage: 85 },
    { name: 'Python', icon: <FaPython className="text-blue-700 text-2xl" />, percentage: 50 },
  ];

  const professionalSkills = [
    { name: t('skills.creativity'), percentage: 90 },
    { name: t('skills.communication'), percentage: 65 },
    { name: t('skills.problemSolving'), percentage: 75 },
    { name: t('skills.teamwork'), percentage: 85 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 border-b-2 border-blue-500 pb-2 inline-block dark:text-white">
                {t('skills.technical')}
              </h2>
            </FadeIn>

            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <FadeIn key={skill.name} delay={0.1 * index}>
                  <div className="mb-2 flex items-center text-gray-700 dark:text-gray-300">
                    <div className="mr-2">{skill.icon}</div>
                    <span className="ml-1">{skill.name}</span>
                    <span className="ml-auto">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 border-b-2 border-blue-500 pb-2 inline-block dark:text-white">
                {t('skills.professional')}
              </h2>
            </FadeIn>

            <motion.div 
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
>
              {professionalSkills.map((skill, index) => (
                <FadeIn key={skill.name} delay={0.2 + index * 0.1}>
                  <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
                    <div className="relative w-32 h-32">
                      {/* Background circle */}
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#CBD5E0" // gray-300 (light mode)
                          strokeWidth="6"
                          className="dark:stroke-gray-700"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"                          
                          stroke="#06B6D4"
                          strokeWidth="6"                         
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 45}`}
                          strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.percentage / 100)}`}
                          initial={{ strokeDashoffset: `${2 * Math.PI * 45}` }}                            
                          animate={{
                            strokeDashoffset: `${2 * Math.PI * 45 * (1 - skill.percentage / 100)}`, width: `${skill.percentage}%`
                          }}
                          transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold dark:text-white">{skill.percentage}%</span>
                      </div>
                    </div>
                    <p className="mt-4 text-center dark:text-gray-300">{skill.name}</p>
                  </div>
                </FadeIn>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
