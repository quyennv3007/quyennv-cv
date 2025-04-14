import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ProjectDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();

  // Project data with translations
  const projectsData = {
    '1': {
      title: { en: 'Internal Dashboard', vi: 'Bảng Điều Khiển Nội Bộ' },
      description: { 
        en: 'A comprehensive dashboard for internal team management, featuring real-time data visualization, team collaboration tools, and performance metrics tracking.',
        vi: 'Bảng điều khiển toàn diện để quản lý đội nhóm nội bộ, với các tính năng trực quan hóa dữ liệu thời gian thực, công cụ hợp tác nhóm và theo dõi các chỉ số hiệu suất.'
      },
      role: { 
        en: 'Lead Frontend Developer', 
        vi: 'Trưởng nhóm phát triển Frontend'
      },
      technologies: ['React', 'Material UI', 'TypeScript', 'Chart.js'],
      features: {
        en: [
          'Real-time data visualization',
          'Team collaboration tools',
          'Performance metrics tracking',
          'Responsive design',
          'Dark mode support'
        ],
        vi: [
          'Trực quan hóa dữ liệu thời gian thực',
          'Công cụ hợp tác nhóm',
          'Theo dõi các chỉ số hiệu suất',
          'Thiết kế tương thích',
          'Hỗ trợ chế độ tối'
        ]
      },
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      github: 'https://github.com',
      liveDemo: 'https://example.com/dashboard'
    },
    '2': {
      title: { en: 'E-commerce Platform', vi: 'Nền Tảng Thương Mại Điện Tử' },
      description: { 
        en: 'Modern e-commerce solution with real-time inventory management, user authentication, and payment processing.',
        vi: 'Giải pháp thương mại điện tử hiện đại với quản lý kho hàng thời gian thực, xác thực người dùng và xử lý thanh toán.'
      },
      role: { 
        en: 'Frontend Developer', 
        vi: 'Lập trình viên Frontend'
      },
      technologies: ['React', 'NestJS', 'Ant Design', 'PostgreSQL'],
      features: {
        en: [
          'User authentication',
          'Product catalog',
          'Shopping cart',
          'Payment integration',
          'Order tracking'
        ],
        vi: [
          'Xác thực người dùng',
          'Danh mục sản phẩm',
          'Giỏ hàng',
          'Tích hợp thanh toán',
          'Theo dõi đơn hàng'
        ]
      },
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      github: 'https://github.com',
      liveDemo: 'https://example.com/ecommerce'
    }
  };

  const currentLang = i18n.language === 'vi' ? 'vi' : 'en';
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('projects.notFound')}</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft size={20} />
            <span>{t('projects.backToHome')}</span>
          </Link>
        </div>
      </div>
    );
  }

  // Add metadata for SEO
  React.useEffect(() => {
    document.title = `${project.title[currentLang]} - John Doe Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', project.description[currentLang]);
    }
  }, [project, currentLang]);

  return (
    <AnimatedSection id="project-detail" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span>{t('projects.backToProjects')}</span>
        </Link>

        <h1 className="text-3xl font-bold mb-4 dark:text-white">{project.title[currentLang]}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">{project.description[currentLang]}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title[currentLang]} screenshot ${index + 1}`}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('projects.role')}</h2>
          <p className="text-gray-700 dark:text-gray-300">{project.role[currentLang]}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('projects.technologies')}</h2>
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

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('projects.keyFeatures')}</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {project.features[currentLang].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('projects.links')}</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Github size={20} />
              <span>{t('projects.sourceCode')}</span>
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink size={20} />
              <span>{t('projects.liveDemo')}</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectDetail;