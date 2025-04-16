import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import ZoomIn from '../components/animations/ZoomIn';
import RevealText from '../components/animations/RevealText';
import { Mail, Printer } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <ZoomIn>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <img
              src={avatar}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </ZoomIn>

        <div>
          <FadeIn delay={0.2} direction="right">
            <RevealText
              text="Nguyễn Văn Quyên"
              tag="h1"
              className="text-4xl md:text-6xl font-bold mb-4 dark:text-white"
              delay={0.5}
            />
          </FadeIn>

          <FadeIn delay={0.5} direction="right">
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4">
              {t('hero.title')}
            </p>
          </FadeIn>

          <FadeIn delay={0.7} direction="right" className='flex gap-4'>
            <p className="inline-flex text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
             <FaPhoneAlt className='mr-2 mt-1 '/>0368395871
            </p>
            <p className="inline-flex text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
             < FaBirthdayCake className='mr-2 mt-1 '/> 30/07/1999
            </p>
            <p className="inline-flex text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
             < PiGenderIntersexBold className='mr-2 mt-1 '/> {t('Gender')}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
          <p className="inline-flex text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mt-2">
             < FaLocationDot className='mr-2 mt-1 '/> {t('Location')}
            </p>
          </FadeIn>


          <FadeIn delay={0.2} direction="left" className=' flex justify-between gap-4 mt-4'>
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
{/*             
            <FadeIn delay={0.3} direction="left">
           
            </FadeIn> */}
        </div>
      </div>
    </section>
  );
};

export default Home;