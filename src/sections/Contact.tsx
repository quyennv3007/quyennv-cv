import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, Phone, MessageSquare, User } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import GradientBlurText from '../components/GradientTitle';
import emailjs from 'emailjs-com';
import '../index.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const [status, setStatus] = useState<any>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    emailjs.send(
      'service_ic80vws',
      'template_hwdzkaf',
      {
        name: formData.firstName + ' ' + formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: 'Gửi từ web quyen-cv',
        message: formData.message
      },
      'gVXnxKxLWKngsecMR'
    )
      .then(response => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: t('contact.form.success') }
        });
        setFormSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
        setTimeout(() => setFormSubmitted(false), 5000);
      })
      .catch(error => {
        console.error('Email sending error:', error);
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: t('contact.form.error') || 'An error occurred. Please try again.' }
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  return (
    <section id="contact" className="min-h-screen mb-5 flex items-center justify-center py-16 dark:bg-gradient-to-b dark:to-black relative overflow-hidden px-2">
      {/* Background elements */}
      <div className="absolute w-full h-full ">
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full filter blur-[100px] opacity-20"></div> */}
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 dark:bg-blue-700 rounded-full filter blur-[100px] opacity-15"></div>
      </div>

      <div className="w-full max-w-6xl z-10">
        <FadeIn>

          {/* Sử dụng component GradientBlurText mới ở đây */}          
          <GradientBlurText
            text={t('contact.title')}
            animateBy="words"
            delay={150}
            direction="top"
            className="items-center justify-center"
            headingClassName="text-center text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-gray-500 tracking-tight"
            gradientClassName="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
          />

          <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-2xl dark:shadow-purple-900/20 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Contact Information */}
              <div className="md:col-span-2 p-8 md:p-12 bg-gray-100/90 dark:bg-gray-800/90 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/20 dark:from-purple-900/30 dark:to-blue-900/20"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t('contact.contactInformation')}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-10">{t('contact.contactDescription')}</p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200/50 dark:bg-gray-700/50 flex items-center justify-center group-hover:bg-purple-200/50 dark:group-hover:bg-purple-600/50 transition-all duration-300">
                        <Mail className="text-gray-700 dark:text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                        <p className="text-gray-800 dark:text-white">quyennv3007@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200/50 dark:bg-gray-700/50 flex items-center justify-center group-hover:bg-purple-200/50 dark:group-hover:bg-purple-600/50 transition-all duration-300">
                        <Phone className="text-gray-700 dark:text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Phone</p>
                        <p className="text-gray-800 dark:text-white">+84 368 395 871</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{t('contact.connect')}</p>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/nguyen.van.quyen.678958" target='_blank' className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-purple-600 transition-colors">
                        <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3 p-8 md:p-12 bg-white/90 dark:bg-gray-900/90 relative">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t('contact.form.success')}</h3>
                    {/* <p className="text-gray-500 dark:text-gray-300 text-center">{t('contact.form.successDescription')}</p> */}
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t('contact.form.title')}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-gray-600 dark:text-gray-300 block text-sm">{t('contact.form.firstName')}</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="text-gray-400 dark:text-gray-500" size={16} />
                            </div>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="your first name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-gray-600 dark:text-gray-300 block text-sm">{t('contact.form.lastName')}</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="text-gray-400 dark:text-gray-500" size={16} />
                            </div>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="your last name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-gray-600 dark:text-gray-300 block text-sm">{t('contact.form.email')}</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Mail className="text-gray-400 dark:text-gray-500" size={16} />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="your email"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-gray-600 dark:text-gray-300 block text-sm">{t('contact.form.phone')}</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Phone className="text-gray-400 dark:text-gray-500" size={16} />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="your phone number"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-gray-600 dark:text-gray-300 block text-sm">{t('contact.form.message')}</label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 pointer-events-none">
                            <MessageSquare className="text-gray-400 dark:text-gray-500" size={16} />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                            placeholder="Your message here..."
                            rows={4}
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                          <span className="relative z-10 flex items-center">
                            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                            {!isSubmitting && <Send size={18} className="ml-2" />}
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-purple-700 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;