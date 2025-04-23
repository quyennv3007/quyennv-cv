import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/animations/FadeIn';
import BlurText from '../components/BlurText';
import Stack from '../components/Stack';
import anh1 from '../assets/image/anh-1.jpg';
import anh2 from '../assets/image/anh-2.jpg';
import anh3 from '../assets/image/anh-3.jpg';
import anh4 from '../assets/image/anh-4.jpg';
import anh5 from '../assets/image/anh-5.jpg';
import anh6 from '../assets/image/anh-6.jpg';

const images = [
  { id: 1, img: anh1 }, 
  { id: 2, img: anh2 },
  { id: 3, img: anh3 },
  { id: 4, img: anh4 },
  { id: 5, img: anh5 },
  { id: 6, img: anh6 }, 
];

const About: React.FC = () => {
  const { t } = useTranslation();

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // Split the about content into lines
  const aboutContentLines = t('about.content').split('. ').map(line =>
    line.endsWith('.') ? line : `${line}.`
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16">
      <div className=" max-w-6xl px-4">
        {/* <FadeIn delay={0.2} direction="left">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">{t('about.title')}</h2>
        </FadeIn> */}
        <BlurText
          text={t('about.title')}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl font-bold mb-8 text-center flex justify-center items-center dark:text-white "
        />
        <div className="grid grid-cols-2 md:grid-cols-10 gap-4 items-center">
          <div className="col-span-6">
            {aboutContentLines.map((line, index) => (
              <FadeIn key={index} delay={0.8 + index * 0.1} direction="right">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-start mb-3">
                  {line}
                </p>
              </FadeIn>
            ))}
          </div>
          <div className="col-span-4">
            <FadeIn delay={1} direction="left">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 300, height: 300 }}
                cardsData={images}
              /></FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;