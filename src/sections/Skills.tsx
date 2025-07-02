import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/animations/FadeIn";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import BlurText from "../components/BlurText";
import { FaDatabase, FaNodeJs } from "react-icons/fa6";
import { SiAntdesign, SiMui, SiNestjs, SiPostman } from "react-icons/si";
import { MdDashboardCustomize } from "react-icons/md";
import GradientBlurText from "../components/GradientTitle";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const skillsData = useMemo(
    () => [
      // Frontend Skills
      {
        name: "React/NextJS",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        category: "Frontend",
        percentage: 80,
      },
      {
        name: "Html",
        icon: <FaHtml5 className="text-orange-500 text-4xl" />,
        category: "Frontend",
        percentage: 90,
      },
      {
        name: "Css/Less/Tailwind",
        icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
        category: "Frontend",
        percentage: 80,
      },
      {
        name: "Javascript/Typescript",
        icon: <FaJs className="text-yellow-500 text-4xl" />,
        category: "Frontend",
        percentage: 85,
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign className="text-red-600 text-4xl" />,
        category: "Frontend",
        percentage: 75,
      },
      {
        name: "Material UI",
        icon: <SiMui className="text-blue-600 text-4xl" />,
        category: "Frontend",
        percentage: 70,
      },

      // Backend Skills
      {
        name: "NestJS",
        icon: <SiNestjs className="text-red-500 text-4xl" />,
        category: "Backend",
        percentage: 40,
      },
      {
        name: "Database",
        icon: <FaDatabase className="text-red-500 text-4xl" />,
        category: "Backend",
        percentage: 40,
      },

      // Tools & DevOps
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-600 text-4xl" />,
        category: "Tools",
        percentage: 85,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-400 text-4xl" />,
        category: "DevOps",
        percentage: 60,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-4xl" />,
        category: "Tools",
        percentage: 80,
      },
      {
        name: "Low-code",
        icon: <MdDashboardCustomize className="text-purple-500 text-4xl" />,
        category: "Tools",
        percentage: 70,
      },
    ],
    [t]
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
        <GradientBlurText
          className="items-center justify-center"
          text={t("skills.skills")}
        />
        <div className=" grid grid-cols-2 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <FadeIn key={skill.name} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center h-full hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform group">
                <div
                  className="mb-3 text-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  title={skill.name}
                >
                  {typeof skill.icon === "string" ? (
                    <span className="text-4xl transition-all duration-300">
                      {skill.icon}
                    </span>
                  ) : (
                    <div className="transition-all duration-300">
                      {skill.icon}
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {skill.category}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
