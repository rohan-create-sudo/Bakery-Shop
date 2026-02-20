
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Our Story', 'Cakes', 'Menu', 'Locations', 'Orders'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none p-4 md:p-6 flex justify-center">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 22, stiffness: 120 }}
        className={`
          pointer-events-auto flex items-center justify-between
          px-4 py-2 md:px-8 md:py-3 rounded-full glass border border-white/50 shadow-xl
          transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
          ${scrolled ? 'w-full md:w-[700px] bg-white/90 scale-95 md:scale-100' : 'w-full md:w-[95%] bg-white/40'}
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-9 h-9 md:w-10 md:h-10 bg-pink-400 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md"
          >
            🍰
          </motion.div>
          <span className="font-display font-bold text-base md:text-xl text-pink-600 hidden sm:inline-block tracking-tight">Sugar Crumb</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              whileHover={{ scale: 1.05, y: -1 }}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="font-semibold text-gray-700 hover:text-pink-600 transition-colors text-sm"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 text-pink-400 hover:text-pink-600">
            <Heart size={18} md={20} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 text-pink-400 hover:text-pink-600 relative">
            <ShoppingCart size={18} md={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-pink-600 text-white text-[9px] rounded-full flex items-center justify-center font-bold">2</span>
          </motion.button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-pink-600 ml-1"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-pink-900/10 backdrop-blur-sm z-[50] pointer-events-auto"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-20 left-4 right-4 bg-white rounded-[2.5rem] p-8 shadow-2xl z-[51] pointer-events-auto flex flex-col items-center gap-5 border border-pink-100"
            >
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl md:text-2xl font-display font-bold text-gray-800 hover:text-pink-500 py-1"
                >
                  {item}
                </motion.a>
              ))}
              <div className="w-full h-px bg-pink-50 my-2" />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-pink-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-pink-100"
              >
                Order Now
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
