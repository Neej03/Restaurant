import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChefHat } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-earth-brown text-brand-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-saffron-600 text-white p-2 rounded-full">
                <ChefHat size={24} />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Taste of Tradition
              </span>
            </Link>
            <p className="text-brand-300 mt-4 leading-relaxed">
              Bringing the authentic taste of home-cooked meals to your table. Made with love, tradition, and the finest ingredients.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-brand-300 hover:text-saffron-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-300 hover:text-saffron-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brand-300 hover:text-saffron-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="text-brand-300 hover:text-saffron-500 transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-300 hover:text-saffron-500 transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-300 hover:text-saffron-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="text-brand-300 hover:text-saffron-500 transition-colors">Catering Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-brand-300">
                <MapPin size={20} className="shrink-0 text-saffron-500 mt-1" />
                <span>123 Heritage Lane, Culinary District, Food City, FC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-300">
                <Phone size={20} className="shrink-0 text-saffron-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-300">
                <Mail size={20} className="shrink-0 text-saffron-500" />
                <span>hello@tasteoftradition.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-brand-300 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-brand-900 border border-brand-700 rounded-md text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-saffron-600 hover:bg-saffron-500 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 mt-8 text-center text-brand-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Taste of Tradition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
