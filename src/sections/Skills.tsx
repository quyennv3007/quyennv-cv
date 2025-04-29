import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/animations/FadeIn';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import BlurText from '../components/BlurText';
import { FaDatabase, FaNodeJs } from 'react-icons/fa6';
import { SiAntdesign, SiMui, SiNestjs } from 'react-icons/si';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const skillsData = useMemo(() => [
    // Frontend Skills
    { 
      name: 'React/NextJS', 
      icon: <FaReact className="text-cyan-400 text-4xl" />, 
      category: 'Frontend',
      percentage: 80 
    },
    { 
      name: 'Html', 
      icon: <FaHtml5 className="text-orange-500 text-4xl" />, 
      category: 'Frontend',
      percentage: 90 
    },
    { 
      name: 'Css/Less/Tailwind', 
      icon: <FaCss3Alt className="text-blue-500 text-4xl" />, 
      category: 'Frontend',
      percentage: 80 
    },
    { 
      name: 'Javascript/Typescript', 
      icon: <FaJs className="text-yellow-500 text-4xl" />, 
      category: 'Frontend',
      percentage: 85 
    },
    { 
      name: 'Ant Design', 
      icon: <SiAntdesign className="text-red-600 text-4xl" />, 
      category: 'Frontend',
      percentage: 75 
    },
    { 
      name: 'Material UI', 
      icon: <SiMui className="text-blue-600 text-4xl" />, 
      category: 'Frontend',
      percentage: 70 
    },
    
    // Backend Skills
    { 
      name: 'NestJS', 
      icon: <SiNestjs className="text-red-500 text-4xl" />, 
      category: 'Backend',
      percentage: 40 
    },
    { 
      name: 'Database', 
      icon: <FaDatabase className="text-red-500 text-4xl" />, 
      category: 'Backend',
      percentage: 40 
    },    
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
          className="text-3xl font-bold  dark:text-white text-center flex justify-center items-center"
        />       
         <span className="block h-1 w-24 bg-cyan-500 mt-4 mb-8 mx-auto rounded-full"></span> 
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">          
          {skillsData.map((skill, index) => (
            <FadeIn key={skill.name} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center h-full hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
                <div className="mb-3 text-center" title={skill.name}>
                  {typeof skill.icon === 'string' ? (
                    <span className="text-4xl">{skill.icon}</span>
                  ) : (
                    skill.icon
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.category}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;