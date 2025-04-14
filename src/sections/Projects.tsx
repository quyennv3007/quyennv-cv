import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'vi' ? 'vi' : 'en';

  const projects = [
    {
      id: 1,
      title: { en: 'Internal Dashboard', vi: 'Bảng Điều Khiển Nội Bộ' },
      description: { 
        en: 'A comprehensive dashboard for internal team management.', 
        vi: 'Bảng điều khiển toàn diện để quản lý đội nhóm nội bộ.'
      },
      technologies: ['React', 'Material UI', 'TypeScript', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      liveDemo: 'https://example.com/dashboard'
    },
    {
      id: 2,
      title: { en: 'E-commerce Platform', vi: 'Nền Tảng Thương Mại Điện Tử' },
      description: { 
        en: 'Modern e-commerce solution with real-time inventory.', 
        vi: 'Giải pháp thương mại điện tử hiện đại với quản lý kho hàng thời gian thực.'
      },
      technologies: ['React', 'NestJS', 'Ant Design', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      liveDemo: 'https://example.com/ecommerce'
    }
  ];

  return (
    <AnimatedSection id="projects" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <Link to={`/projects/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title[currentLang]}
                  className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {project.title[currentLang]}
                  </h3>
                </Link>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description[currentLang]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <span>{t('projects.viewDetails')}</span>
                    <ExternalLink size={16} />
                  </Link>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;