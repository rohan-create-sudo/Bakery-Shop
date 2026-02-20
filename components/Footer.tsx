
import React from 'react';
import { Instagram, Twitter, Facebook, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">🍰</div>
              <span className="font-display font-black text-3xl text-pink-600">Sugar Crumb</span>
            </div>
            <p className="text-gray-500 text-lg max-w-md mb-8">
              Crafting joy since 2021. Every cake tells a story, every pastry is a poem. Join our sweet journey.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: '#FDF2F8' }}
                  className="w-12 h-12 rounded-full border border-pink-100 flex items-center justify-center text-pink-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-gray-800 mb-6">Sweet Links</h4>
            <ul className="space-y-4">
              {['Our Story', 'Wholesale', 'Careers', 'Ingredients', 'FAQs'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl text-gray-800 mb-6">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-50 p-3 rounded-2xl text-pink-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">+1 (555) 123-CAKE</p>
                  <p className="text-sm text-gray-500">Mon - Sat: 9am - 8pm</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-green-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">© 2024 Sugar Crumb Bakery. All treats reserved.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-600">Privacy Policy</a>
            <a href="#" className="hover:text-pink-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
