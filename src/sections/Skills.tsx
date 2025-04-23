import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from 'react-icons/fa';
import BlurText from '../components/BlurText';
import { FaDatabase, FaNodeJs } from 'react-icons/fa6';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const RADIUS = 45;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const technicalSkills = useMemo(() => [
    { name: 'React/NextJS', icon: <FaReact className="text-cyan-400 text-2xl" />, percentage: 80 },
    { name: 'Html', icon: <FaHtml5 className="text-orange-500 text-2xl" />, percentage: 90 },
    { name: 'Css/Less/Tailwind', icon: <FaCss3Alt className="text-blue-500 text-2xl" />, percentage: 80 },
    { name: 'Javascript/Typescript', icon: <FaJs className="text-yellow-500 text-2xl" />, percentage: 85 },
    { name: 'NodeJs', icon: <FaNodeJs className="text-green-500 text-2xl" />, percentage: 40 },
    { name: 'Database', icon: <FaDatabase className="text-red-500 text-2xl" />, percentage: 40 },
  ], []);

  const professionalSkills = useMemo(() => [
    { name: t('skills.creativity'), percentage: 80 },
    { name: t('skills.communication'), percentage: 65 },
    { name: t('skills.problemSolving'), percentage: 75 },
    { name: t('skills.teamwork'), percentage: 85 },
  ], [t]);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
      <BlurText
          text={t('skills.skills')}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl font-bold mb-8  dark:text-white text-center flex justify-center items-center  "
        />
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div>
            {/* <FadeIn>
              <h2 className="text-2xl font-semibold mb-8 border-b-2 border-cyan-400 pb-2 inline-block dark:text-white">
                {t('skills.technical')}
              </h2>
            </FadeIn> */}

            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <FadeIn key={skill.name} delay={0.1 * index}>
                  <div className="mb-2 flex items-center text-gray-700 dark:text-gray-300">
                    <div className="mr-2" title={skill.name}>{skill.icon}</div>
                    <span className="ml-1">{skill.name}</span>
                    <span className="ml-auto">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-cyan-400"
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
            {/* <FadeIn>
              <h2 className="text-2xl font-semibold mb-8 border-b-2 border-cyan-400 pb-2 inline-block dark:text-white">
                {t('skills.professional')}
              </h2>
            </FadeIn> */}

            <motion.div 
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
              {professionalSkills.map((skill, index) => (
                <FadeIn key={index} delay={0.2 + index * 0.1}>
                  <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
                    <div className="relative w-28 md:w-32 h-28 md:h-32">
                      {/* Background circle */}
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        role="img"
                        aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r={RADIUS}
                          fill="none"
                          stroke="#CBD5E0"
                          strokeWidth="6"
                          className="dark:stroke-gray-700"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={RADIUS}
                          fill="none"
                          stroke="#06B6D4"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={CIRCUMFERENCE}
                          strokeDashoffset={CIRCUMFERENCE * (1 - skill.percentage / 100)}
                          initial={{ strokeDashoffset: CIRCUMFERENCE }}
                          animate={{ strokeDashoffset: CIRCUMFERENCE * (1 - skill.percentage / 100) }}
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