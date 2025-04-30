import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import FadeIn from '../components/animations/FadeIn';
import ZoomIn from '../components/animations/ZoomIn';
import RevealText from '../components/animations/RevealText';
import { projectsData } from '../common/projectDetail';
import BlurText from '../components/BlurText';
import { IoClose } from "react-icons/io5";

// Tách thành một component riêng để xử lý phần hình ảnh
const ProjectImages = ({ project, currentLang }:{project:any,currentLang:any}) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  
  return (
    <ZoomIn>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden mb-6">
        {/* Main image display */}
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
          <motion.img
            key={activeImage}
            src={project.images[activeImage]}
            alt={`${project.title[currentLang]} screenshot ${activeImage + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Image thumbnails */}
        {project.images.length > 1 && (
          <div className="p-4 flex gap-3 overflow-x-auto">
            {project.images.map((image:any, index:number) => (
              <motion.button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeImage === index
                  ? 'border-cyan-500 shadow-md'
                  : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </ZoomIn>
  );
};

// Component chính
const ProjectDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  
  const navigate = useNavigate();

  const currentLang = i18n.language === 'vi' ? 'vi' : 'en';
  const project = projectsData[id as keyof typeof projectsData];
  
  // Handle "Back to Projects" with proper scrolling
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#projects');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Sử dụng useMemo để đảm bảo BlurText không bị render lại không cần thiết
  const projectTitle = useMemo(() => {
    if (project) {
      return (
        <BlurText
          text={project.title[currentLang]}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold mb-3 dark:text-white"
        />
      );
    }
    return null;
  }, [project, currentLang]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ZoomIn>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: [0, 180] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Code size={40} className="text-red-500" />
              </motion.div>
            </motion.div>
          </ZoomIn>

          <RevealText text={
            t('projects.notFound')
          } className='text-3xl font-bold mb-4 dark:text-white' delay={0.3} />


          <FadeIn direction="up" delay={0.5}>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t('projects.notFoundMessage')}</p>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                >
                  <ArrowLeft size={20} />
                </motion.div>
                <span>{t('projects.backToHome')}</span>
              </Link>
            </motion.div>
          </FadeIn>
        </motion.div>
      </div>
    );
  }

  // Add metadata for SEO
  useEffect(() => {
    // document.title = `${project.title[currentLang]} - John Doe Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', project.description[currentLang]);
    }
  }, [project, currentLang]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <AnimatedSection id="project-detail" className="py-16 min-h-screen">
      <motion.div
        className="container mx-auto px-4 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header with back button */}
        <header className="mb-8">
          <FadeIn direction="left" delay={0.1}>
            <a
              href="/#projects"
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4 transition-colors duration-300 group"
            >
              <motion.span
                className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} />
              </motion.span>
              <span className="font-medium">{t('projects.backToProjects')}</span>
            </a>
          </FadeIn>

          {/* Sử dụng projectTitle đã được memoized */}
          {projectTitle}

          <FadeIn direction="up" delay={0.5}>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl">{project.description[currentLang]}</p>
          </FadeIn>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            {/* Sử dụng component ProjectImages đã tách riêng */}
            <ProjectImages project={project} currentLang={currentLang} />

            {/* Key Features */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md mb-6"
              variants={itemVariants}
            >

              <h2 className="text-2xl font-semibold mb-5 dark:text-white flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, 0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Code size={24} className="text-cyan-500" />
                </motion.div>
                <RevealText text={t('projects.keyFeatures')} />

              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {project.features[currentLang].map((feature, index) => (
                  <FadeIn key={index} direction="left" delay={0.2 + index * 0.1}>
                    <motion.li
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.span
                        className="mt-1 bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: index * 0.5, repeat: Infinity, repeatDelay: 5 }}
                      >
                        <span className="block w-2 h-2 bg-cyan-500 dark:bg-cyan-500 rounded-full"></span>
                      </motion.span>
                      <span>{feature}</span>
                    </motion.li>
                  </FadeIn>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right column - Info cards */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Role */}
            <FadeIn direction="right" delay={0.3}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <User size={20} className="text-cyan-500" />
                  </motion.div>
                  {t('projects.role')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{project.role[currentLang]}</p>
              </motion.div>
            </FadeIn>

            {/* Technologies */}
            <FadeIn direction="right" delay={0.5}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu size={20} className="text-cyan-500" />
                  </motion.div>
                  {t('projects.technologies')}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgb(191, 219, 254)",
                        color: "rgb(30, 64, 175)"
                      }}
                    >
                      {project.icon?.[index] && <span>{project.icon[index]}</span>}
                      <span>{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>

            {/* Timeline (if available in project data) */}
            {project.timeline && (
              <FadeIn direction="right" delay={0.7}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Calendar size={20} className="text-cyan-500" />
                    </motion.div>
                    {t('projects.timeline')}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">{project.timeline}</p>
                </motion.div>
              </FadeIn>
            )}

            {/* Links */}
            <FadeIn direction="right" delay={0.9}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <ExternalLink size={20} className="text-cyan-500" />
                  </motion.div>
                  {t('projects.links')}
                </h2>
                <div className="flex flex-col gap-4">
                  <motion.a
                    href={project.github}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border-cyan-500 border-2 text-cyan-500 px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.03, x: 5 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                    >
                      <Github size={20} className="text-gray-700 dark:text-gray-300" />
                    </motion.div>
                    <span className="font-medium flex text-gray-800 dark:text-gray-200">{t('projects.sourceCode')} {project.liveDemo ==='#' ?<IoClose className='text-red-600 text-2xl'/>:null}</span>
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400  text-white rounded-full hover:bg-cyan-700 transition-colors duration-300"
                    whileHover={{ scale: 1.03, x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ boxShadow: "0 0 0 rgba(37, 99, 235, 0)" }}
                    animate={{
                      boxShadow: ["0 0 0 rgba(37, 99, 235, 0)", "0 0 15px rgba(37, 99, 235, 0.5)", "0 0 0 rgba(37, 99, 235, 0)"]
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 3 }
                    }}
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                    <span className="font-medium flex">{t('projects.liveDemo')}{project.liveDemo ==='#' ?<IoClose className='text-red-600 text-2xl'/>:null}</span> 
                  </motion.a>
                </div>
              </motion.div>
            </FadeIn>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default ProjectDetail;