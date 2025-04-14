import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import ZoomIn from '../components/animations/ZoomIn';
import RevealText from '../components/animations/RevealText';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <ZoomIn>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-blue-500"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </ZoomIn>
        
        <div>
          <FadeIn delay={0.2} direction="right">
            <RevealText 
              text="John Doe"
              tag="h1"
              className="text-4xl md:text-6xl font-bold mb-4 dark:text-white"
              delay={0.5}
            />
          </FadeIn>
          
          <FadeIn delay={0.5} direction="right">
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
              {t('hero.title')}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.7} direction="right">
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.9} direction="up">
            <div className="mt-8">
              <motion.a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Home;