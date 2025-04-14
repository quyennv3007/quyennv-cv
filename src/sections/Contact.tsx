import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Printer } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import FadeIn from '../components/animations/FadeIn';

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
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">{t('contact.title')}</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FadeIn delay={0.2} direction="left">
              <motion.button
                onClick={handleEmailClick}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail size={20} />
                </motion.div>
                <span>{t('contact.email')}</span>
              </motion.button>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="left">
              <motion.button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Printer size={20} />
                </motion.div>
                <span>{t('contact.print')}</span>
              </motion.button>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="right">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold dark:text-white">{t('contact.followMe')}</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Github size={20} />
                  </motion.div>
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Linkedin size={20} />
                  </motion.div>
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;