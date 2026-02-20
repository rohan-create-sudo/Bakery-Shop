
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', damping: 25, stiffness: 100 } 
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden bg-gradient-to-b from-[#FFFDF5] to-[#FFE4E1]">
      {/* Decorative Floating Sprinkles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:block"
          initial={{ 
            x: Math.random() * 100 - 50 + 'vw', 
            y: Math.random() * 100 - 50 + 'vh',
            rotate: 0 
          }}
          animate={{ 
            y: [null, Math.random() * 40 - 20 + 'vh'],
            rotate: [0, 360],
          }}
          transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          style={{
            width: Math.random() * 12 + 4 + 'px',
            height: Math.random() * 12 + 4 + 'px',
            borderRadius: Math.random() > 0.5 ? '50%' : '20%',
            backgroundColor: i % 3 === 0 ? '#FFD1DC' : i % 3 === 1 ? '#E0F2F1' : '#FFB74D',
            opacity: 0.3
          }}
        />
      ))}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 font-bold text-xs md:text-sm mb-6 uppercase tracking-widest">
            Baked with Love in New York
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-gray-800 leading-[1.1]"
          >
            A Little <br />
            <span className="text-pink-500 relative whitespace-nowrap">
              Sugar Crumb
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
                <path d="M5 15C50 15 150 5 400 15" stroke="#FFD1DC" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span> <br />
            of Joy.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-6 md:mt-8 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Handcrafted treats that sparkle with flavor. Experience the premium taste of real butter and fresh fruits.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 md:py-5 bg-pink-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 transition-all"
            >
              Shop Our Cakes 🍰
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 md:py-5 bg-white text-pink-500 rounded-2xl font-bold text-lg border-2 border-pink-100 shadow-lg"
            >
              See the Menu
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: 'spring', damping: 20 }}
          className="relative order-1 lg:order-2 px-4 sm:px-10 md:px-0"
        >
          <div className="relative z-10 bg-white p-3 md:p-4 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl rotate-1 sm:rotate-2 max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200" 
              alt="Signature Cake"
              className="rounded-[2rem] md:rounded-[3rem] w-full aspect-[4/5] object-cover"
            />
            {/* Bubble 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-yellow-300 px-4 py-3 md:p-6 rounded-full shadow-lg font-display font-bold text-sm md:text-lg"
            >
              Fresh! ✨
            </motion.div>
            {/* Bubble 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-pink-400 text-white px-4 py-3 md:p-6 rounded-full shadow-lg font-display font-bold text-sm md:text-lg"
            >
              100% Organic 🍓
            </motion.div>
          </div>
          {/* Background Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-100/40 rounded-full blur-3xl -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
