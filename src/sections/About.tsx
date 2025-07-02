import React from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/animations/FadeIn";
import Stack from "../components/Stack";
import anh1 from "../assets/image/anh-1.jpg";
import anh2 from "../assets/image/anh-2.jpg";
import anh3 from "../assets/image/anh-3.jpg";
import anh5 from "../assets/image/anh-5.jpg";
import anh6 from "../assets/image/anh-6.jpg";
import GradientBlurText from "../components/GradientTitle";

const images = [
  { id: 1, img: anh1 },
  { id: 2, img: anh2 },
  { id: 3, img: anh3 },
  // { id: 4, img: anh4 },
  { id: 5, img: anh5 },
  { id: 6, img: anh6 },
];

const About: React.FC = () => {
  const { t } = useTranslation();

  // Split the about content into lines
  const aboutContentLines = t("about.content")
    .split(". ")
    .map((line) => (line.endsWith(".") ? line : `${line}.`));

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="max-w-6xl px-4">
        <GradientBlurText
          className="items-center justify-center"
          text={t("about.title")}
        />

        <div className="grid grid-cols-2 md:grid-cols-10 gap-4 mt-6 items-center">
          <div className="col-span-6 fontSourceSans">
            {aboutContentLines.map((line, index) => (
              <FadeIn key={index} delay={0.8 + index * 0.1} direction="right">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-left mb-3">
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
              />
            </FadeIn>
          </div>
        </div>

        {/* Stats Section - UI Design below content */}
        <FadeIn delay={1.5} direction="up">
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200/20 dark:border-purple-400/20">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                ~ 3
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("stats.yearsExperience")}
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200/20 dark:border-blue-400/20">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("stats.projects")}
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-200/20 dark:border-green-400/20">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                1
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("stats.companies")}
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-200/20 dark:border-orange-400/20">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("stats.satisfied")}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
