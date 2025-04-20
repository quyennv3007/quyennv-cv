import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import ZoomIn from '../components/animations/ZoomIn';
import RevealText from '../components/animations/RevealText';
import { Mail, Printer, Download } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import { FaPhoneAlt } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";
import avatar from '../assets/image/avatar.jpg'
const Home: React.FC = () => {
  const { t } = useTranslation();

  const handlePrint = useReactToPrint({
    content: () => document.getElementById('root'),
    pageStyle: `
      @media print {
        @page {
          size: A4 portrait;
          margin: 15mm;
        }
        html, body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          background-color: white !important;
        }
        nav, footer, button, .print-hide {
          display: none !important;
        }
        section {
          page-break-inside: avoid;
          min-height: auto !important;
          padding: 0 !important;
          margin: 15px 0 !important;
        }
        h1, h2, h3 {
          page-break-after: avoid;
        }
        img {
          max-width: 100% !important;
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
        .print-section {
          break-inside: avoid;
        }
      }
    `,
    onBeforeGetContent: () => {
      document.body.classList.add('printing');
      return Promise.resolve();
    },
    onAfterPrint: () => {
      document.body.classList.remove('printing');
    },
    removeAfterPrint: true,
  });

  const handleEmailClick = () => {
    const mailtoLink = 'mailto:john@example.com?subject=CV Inquiry from website&body=Hello, I viewed your CV website and would like to connect with you regarding an opportunity.';
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <ZoomIn>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-64 h-64"
          >
            {/* Blue accent shape */}
            <motion.div 
              className="absolute border border-blue-500 w-64 h-64 rounded-2xl -bottom-5 -right-5 z-0"
              animate={{ 
                rotate: [0, 5, 0, -5, 0], 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />

             <motion.div 
              className="absolute border border-blue-500 w-32 h-32 rounded-2xl -top-5 -left-5 z-0"
              animate={{ 
                rotate: [0, 5, 0, -5, 0], 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            {/* Main photo container with overflow hidden */}
            <motion.div className="absolute inset-0 z-10 overflow-hidden rounded-xl"
              initial={{ pathLength: 0 }}
              animate={{ 
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <img
                src={avatar}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </motion.div>
            
            {/* Rectangular frame */}
            <motion.div
              className="absolute inset-0 z-20 border-2 border-white rounded-xl "
              initial={{ pathLength: 0 }}
              animate={{ 
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </ZoomIn>

        <div>
          <FadeIn delay={0.2} direction="right">
            <RevealText
              text="Nguyễn Văn Quyên"
              tag="h1"
              className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-500 to-gray-900 dark:text-white text-transparent bg-clip-text py-2"
              delay={0.5}
            />
          </FadeIn>

          <FadeIn delay={0.5} direction="right">
            {/* <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-400  text-transparent bg-clip-text mb-4">
              {t('hero.title')}
            </p> */}            
            <RevealText
            text={t('hero.title')}
            className="text-2xl md:text-2xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-transparent bg-clip-text mb-4"
            delay={0.8}
            duration={0.4}
          />
          </FadeIn>

          <FadeIn delay={0.7} direction="right" className='flex gap-4'>
            <p className="inline-flex text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl">
              <FaPhoneAlt className='mr-2 mt-1 ' />0368395871
            </p>
            <p className="inline-flex text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl">
              < FaBirthdayCake className='mr-2 mt-1 ' /> 30/07/1999
            </p>
            <p className="inline-flex text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl">
              < PiGenderIntersexBold className='mr-2 mt-1 ' /> {t('Gender')}
            </p>
          </FadeIn>

          {/* <FadeIn delay={0.2} direction="right">
            <p className="inline-flex text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mt-2">
              < FaLocationDot className='mr-2 mt-1 ' /> {t('Location')}.
            </p>
          </FadeIn> */}


          <FadeIn delay={0.2} direction="left" className='flex justify-between gap-2 mt-6'>
            <motion.button
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-400  text-white px-4 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white"
              >
                <Mail size={20} />
              </motion.div>
              <span className="font-medium">{t('contact.email')}</span>
            </motion.button>

            <motion.button
              onClick={handlePrint}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gray-600 to-gray-500 text-white px-4 py-3.5 rounded-xl shadow-lg hover:shadow-gray-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white"
              >
                <Download size={20} />
              </motion.div>
              <span className="font-medium">{t('contact.downloadCV')}</span>
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Home;