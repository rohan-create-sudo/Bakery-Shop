
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ChevronRight, Star } from 'lucide-react';

const SignatureShowcase: React.FC = () => {
  return (
    <section id="cakes" className="py-20 md:py-24 bg-[#FFFDF5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <span className="font-accent text-2xl md:text-3xl text-pink-400">Sweet Perfection</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-800 mt-1 md:mt-2">Signature Series</h2>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-pink-600 font-bold group text-sm md:text-base self-start md:self-auto"
          >
            Explore Full Catalog <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.button>
        </div>

        <div className="flex overflow-x-auto pb-10 gap-6 md:gap-8 scrollbar-hide snap-x no-scrollbar -mx-6 px-6">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-100/50 border border-white group snap-center transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-12">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-pink-600 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-lg hover:bg-pink-500 hover:text-white transition-all z-10"
                >
                  <span className="text-xl md:text-2xl font-light">+</span>
                </motion.button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 leading-tight">{product.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-400 shrink-0 mt-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-gray-500">4.9</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs md:text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl md:text-2xl font-bold text-pink-600 tracking-tight">{product.price}</span>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-tighter">Per Portion</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureShowcase;
