import React from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/animations/FadeIn";
import Carousel from "../components/Carousel";
import BlurText from "../components/BlurText";
import { FaCss3Alt, FaJs, FaLess, FaReact } from "react-icons/fa6";
import {
  SiAntdesign,
  SiMobx,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import appsmith from "../assets/image/favicon.png";
import jetadmin from "../assets/image/jetAdmin.png";
import GradientBlurText from "../components/GradientTitle";
import wh1 from "../assets/image/imageProject/wh-1.png";
import sl1 from "../assets/image/imageProject/sl-1.png";
import ci1 from "../assets/image/imageProject/ci-1.png";
import as from "../assets/image/imageProject/as-1.png";
import ja from "../assets/image/imageProject/ja-1.png";

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === "vi" ? "vi" : "en";

  const projects = [
    {
      title: "Call Insight",
      description: `${t("projects.callInsight")}`,
      id: 3,
      image: ci1,
      technologies: ["React Admin", "Material", "Redux toolkit", "Tailwind"],
      icon: [
        <SiReact className="text-cyan-600 text-2xl" />,
        <SiMui className="text-blue-600 text-2xl" />,
        <SiRedux className="text-cyan-600 text-2xl" />,
        <SiTailwindcss className="text-cyan-400 text-2xl" />,
      ],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Warehouse",
      description: `${t("projects.warehouse")}`,
      id: 1,
      image: wh1,
      technologies: ["React", "Ant design", "Redux moxb", "Less"],
      icon: [
        <FaReact className="text-cyan-400 text-2xl" />,
        <SiAntdesign className="text-red-600 text-2xl" />,
        <SiMobx className="text-orange-600 text-2xl" />,
        <FaLess className="text-cyan-600 text-2xl" />,
      ],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "SalePlan",
      description: `${t("projects.salePlan")}`,
      id: 2,
      image: sl1,

      technologies: ["React", "Ant design", "Redux moxb", "Less"],
      icon: [
        <FaReact className="text-cyan-400 text-2xl" />,
        <SiAntdesign className="text-red-600 text-2xl" />,
        <SiMobx className="text-orange-600 text-2xl" />,
        <FaLess className="text-cyan-600 text-2xl" />,
      ],
      github: "#",
      liveDemo: "#",
    },

    {
      title: "Admin Ecommerce",
      description: `${t("projects.appSmith")}`,
      id: 4,
      image: as,
      technologies: ["AppSmith", "Javascript", "Css"],
      icon: [
        <img src={appsmith} className="text-gray-800 text-2xl w-6" />,
        <FaJs className="text-yellow-500 text-2xl" />,
        <FaCss3Alt className="text-blue-500 text-2xl" />,
      ],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Internal App",
      description: `${t("projects.jetadmin")}`,
      id: 5,
      image: ja,
      technologies: ["JetAdmin", "Javascript", "Css"],
      icon: [
        <img src={jetadmin} className="text-gray-800 text-2xl w-6" />,
        <FaJs className="text-yellow-500 text-2xl" />,
        <FaCss3Alt className="text-blue-500 text-2xl" />,
      ],
      github: "#",
      liveDemo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="w-full">
        <FadeIn>
          <GradientBlurText
            className="items-center justify-center"
            text={t("projects.title")}
          />
        </FadeIn>
        {/* <span className="block h-1 w-24 bg-cyan-500 mt-4 mb-8 mx-auto rounded-full"></span> */}
        <FadeIn delay={0.6} direction="up">
          <div style={{ height: "600px", position: "relative" }}>
            <Carousel
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={true}
              items={projects}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
