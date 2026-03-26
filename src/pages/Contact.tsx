import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! We will get back to you soon.');
    }, 1500);
  };

  return (
    <div className="bg-earth-beige min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-brown mb-6">Get in Touch</h1>
          <p className="text-lg text-earth-brown/70">
            Have a question about our menu, catering services, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-200">
              <h2 className="text-2xl font-serif font-bold text-earth-brown mb-6">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-brand-100 p-3 rounded-full text-earth-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-brown mb-1">Our Location</h3>
                    <p className="text-earth-brown/70 leading-relaxed">
                      123 Heritage Lane<br />
                      Food City, FC 12345
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-brand-100 p-3 rounded-full text-earth-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-brown mb-1">Phone Number</h3>
                    <p className="text-earth-brown/70">
                      +91 7226937033<br />
                      
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-brand-100 p-3 rounded-full text-earth-red shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-brown mb-1">Email Address</h3>
                    <p className="text-earth-brown/70">
                      neej.butani1603@gmail.com<br />
                      
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-brand-200">
                <h3 className="font-bold text-earth-brown mb-4">Quick Connect</h3>
                <a
                  href="https://wa.me/917226937033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transition-colors shadow-md"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-200">
              <h2 className="text-2xl font-serif font-bold text-earth-brown mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-earth-brown mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-earth-brown mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-earth-brown mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-earth-brown mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50 text-earth-brown"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-earth-brown mb-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 px-6 bg-earth-red text-white text-lg font-bold rounded-xl hover:bg-earth-brown transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={20} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-4 rounded-2xl shadow-sm border border-brand-200 overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 lg:aspect-h-4 rounded-xl overflow-hidden bg-brand-100 flex items-center justify-center">
            {/* Placeholder for Google Maps Embed */}
            <div className="text-center p-12">
              <MapPin className="h-12 w-12 text-earth-red mx-auto mb-4 opacity-50" />
              <p className="text-earth-brown/60 font-medium">Interactive Map Embed Goes Here</p>
              <p className="text-sm text-earth-brown/40 mt-2">123 Heritage Lane, Food City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
