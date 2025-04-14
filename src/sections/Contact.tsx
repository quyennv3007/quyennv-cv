import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, Printer } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const handlePrint = useReactToPrint({
    content: () => document.getElementById('root'),
    pageStyle: `
      @media print {
        @page {
          size: A4;
          margin: 20mm;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        nav, footer, button, .print-hide {
          display: none !important;
        }
        section {
          page-break-inside: avoid;
          min-height: auto !important;
          padding: 0 !important;
          margin: 20px 0 !important;
        }
        h2, h3 {
          page-break-after: avoid;
        }
        .dark {
          background: white !important;
          color: black !important;
        }
        .dark * {
          color: black !important;
          border-color: #ddd !important;
          background: white !important;
        }
      }
    `,
  });

  const handleEmailClick = () => {
    const mailtoLink = 'mailto:john@example.com?subject=CV Inquiry from website&body=Hello, I viewed your CV website and would like to connect with you regarding an opportunity.';
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('contact.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              <span>{t('contact.email')}</span>
            </button>
            
            <button
              onClick={handlePrint}
              className="w-full flex items-center justify-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Printer size={20} />
              <span>{t('contact.print')}</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold dark:text-white">{t('contact.followMe')}</h3>
            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;