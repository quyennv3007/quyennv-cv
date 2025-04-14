import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, X } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Internal Dashboard',
      description: 'A comprehensive dashboard for internal team management.',
      fullDescription: 'A comprehensive dashboard for internal team management, featuring real-time data visualization, team collaboration tools, and performance metrics tracking.',
      technologies: ['React', 'Material UI', 'TypeScript', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Real-time data visualization',
        'Team collaboration tools',
        'Performance metrics tracking',
        'Responsive design',
        'Dark mode support'
      ]
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory.',
      fullDescription: 'Modern e-commerce solution with real-time inventory management, user authentication, and payment processing.',
      technologies: ['React', 'NestJS', 'Ant Design', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'User authentication',
        'Product catalog',
        'Shopping cart',
        'Payment integration',
        'Order tracking'
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
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
                <button
                  onClick={() => setSelectedProject(project.id)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <span>{t('projects.viewDetails')}</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold dark:text-white">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              
              <img
                src={projects.find(p => p.id === selectedProject)?.image}
                alt={projects.find(p => p.id === selectedProject)?.title}
                className="w-full rounded-lg mb-6"
              />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {projects.find(p => p.id === selectedProject)?.fullDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {projects.find(p => p.id === selectedProject)?.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Key Features</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {projects.find(p => p.id === selectedProject)?.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;