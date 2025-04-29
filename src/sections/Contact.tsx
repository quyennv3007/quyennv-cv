import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, Phone, MessageSquare, User } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';

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

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Replace this with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-700 rounded-full filter blur-[100px] opacity-15"></div>
      </div>
      
      <div className="w-full max-w-6xl z-10">
        <FadeIn>
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Connect</span>
          </h1>
          
          <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-2xl shadow-purple-900/20 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Contact Information */}
              <div className="md:col-span-2 p-8 md:p-12 bg-gray-800/90 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/20"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
                  <p className="text-gray-300 mb-10">Feel free to reach out. I'll get back to you as soon as possible.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-purple-600/50 transition-all duration-300">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white">quyennv3007@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-purple-600/50 transition-all duration-300">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white">+84 368 395 871</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-16">
                    <p className="text-gray-400 mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3 p-8 md:p-12 bg-gray-900/90 relative">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-center">Thank you for your message. I'll get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-6 text-white">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-gray-300 block text-sm">First Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="text-gray-500" size={16} />
                            </div>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-800 border border-gray-700 text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="John"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-gray-300 block text-sm">Last Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <User className="text-gray-500" size={16} />
                            </div>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-800 border border-gray-700 text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-gray-300 block text-sm">Email</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Mail className="text-gray-500" size={16} />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-800 border border-gray-700 text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-gray-300 block text-sm">Phone Number (Optional)</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <Phone className="text-gray-500" size={16} />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-gray-800 border border-gray-700 text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                              placeholder="+91 123 456 7890"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-gray-300 block text-sm">Message</label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 pointer-events-none">
                            <MessageSquare className="text-gray-500" size={16} />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-800 border border-gray-700 text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
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
                            {isSubmitting ? 'Sending...' : 'Send Message'}
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