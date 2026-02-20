
import React from 'react';
import { motion } from 'framer-motion';

const FloatingRider: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-0 pointer-events-none z-40 overflow-visible">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '120vw' }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear",
          repeatDelay: 10
        }}
        className="absolute top-24 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-pink-100"
      >
        <div className="text-2xl">🛵</div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 leading-none">Sugar Crumb</span>
          <span className="text-xs font-bold text-pink-600">Free Delivery via Zomato</span>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingRider;
