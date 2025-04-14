import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projects = {
    '1': {
      title: 'Internal Dashboard',
      description: 'A comprehensive dashboard for internal team management, featuring real-time data visualization, team collaboration tools, and performance metrics tracking.',
      role: 'Lead Frontend Developer',
      technologies: ['React', 'Material UI', 'TypeScript', 'Chart.js'],
      features: [
        'Real-time data visualization',
        'Team collaboration tools',
        'Performance metrics tracking',
        'Responsive design',
        'Dark mode support'
      ],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ]
    },
    '2': {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management, user authentication, and payment processing.',
      role: 'Frontend Developer',
      technologies: ['React', 'NestJS', 'Ant Design', 'PostgreSQL'],
      features: [
        'User authentication',
        'Product catalog',
        'Shopping cart',
        'Payment integration',
        'Order tracking'
      ],
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mb-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
      >
        <ArrowLeft size={20} />
        <span>Back to Projects</span>
      </Link>

      <h1 className="text-3xl font-bold mb-4 dark:text-white">{project.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">{project.description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Role</h2>
        <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;