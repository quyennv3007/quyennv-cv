import React from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaCalendarAlt, FaLink } from "react-icons/fa";
import FadeIn from "../components/animations/FadeIn";
import GradientBlurText from "../components/GradientTitle";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <GradientBlurText
            className="items-center justify-center"
            text={t("experience.title")}
          />
          {/* <span className="block h-1 w-24 bg-cyan-500 mt-4 mx-auto rounded-full"></span> */}
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-center">
            {t("experience.current.summary")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1 transform md:translate-x-[-50%] top-0 h-full w-1 bg-cyan-500"></div>

          {/* Current Job - Featured Card */}
          <div className="hidden md:block absolute left-1 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-white dark:border-gray-800 z-10">
            <FaBriefcase className="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <FadeIn delay={0.6} direction="left">
            <div className="relative mb-20">
              <div className="md:ml-auto md:w-[calc(100%-40px)] p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] border-l-4 border-cyan-500">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900 rounded-full mr-3">
                    <FaBriefcase className="text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white">
                    {t("experience.current.title")}
                  </h3>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <a
                    href="https://vietmap.vn/?srsltid=AfmBOoofvZO6qjs3AmwQN8mxi4azmvgsweWSN8BDpS1UJHe013cdBmyU"
                    target="_blank"
                    className="flex items-center text-cyan-500 font-semibold hover:text-cyan-600 transition-colors ml-2 mr-2"
                  >
                    {"  "}
                    <FaLink className="mr-2" />
                    {t("experience.current.company")}
                  </a>{" "}
                  <FaCalendarAlt className="mr-2 text-cyan-500" />
                  <span>{t("experience.current.period")}</span>
                </div>
                <div className=" p-4 rounded-md">
                  <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">
                    {t("experience.Responsibilities")}:
                  </h4>
                  {/* <ul className="space-y-3">
                    {(t('experience.current.responsibilities', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul> */}
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {(
                      t("experience.current.responsibilities", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item: string, index: number) => (
                      <FadeIn
                        key={index}
                        direction="left"
                        delay={0.2 + index * 0.1}
                      >
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <motion.span
                            className="mt-1 bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              delay: index * 0.5,
                              repeat: Infinity,
                              repeatDelay: 5,
                            }}
                          >
                            <span className="block w-2 h-2 bg-cyan-500 dark:bg-cyan-500 rounded-full"></span>
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full text-sm">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full text-sm">
                    Low-code
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Experience;
