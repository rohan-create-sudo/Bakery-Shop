
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveCake: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    { id: 3, name: 'Toppings', color: 'bg-red-400', desc: 'Fresh local berries & gold leaves', icon: '🍓' },
    { id: 2, name: 'Cream Frosting', color: 'bg-white', desc: 'Double-whipped Madagascar vanilla cream', icon: '☁️' },
    { id: 1, name: 'Sponge Base', color: 'bg-yellow-200', desc: 'Light & airy almond-infused sponge', icon: '🍞' },
  ];

  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-gray-800 mb-4">Build Your Vibe</h2>
          <p className="text-gray-500 max-w-lg mx-auto italic font-accent text-lg md:text-xl px-4">Tap a layer to reveal the secret ingredients.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Cake Visual */}
          <div className="relative w-64 sm:w-80 md:w-96 flex flex-col items-center">
            {layers.map((layer, idx) => (
              <motion.div
                key={layer.id}
                layout
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                className={`
                  w-full cursor-pointer relative z-[${10 - idx}]
                  ${layer.color} border-x-4 border-b-4 md:border-b-8 border-gray-100
                  ${layer.id === 3 ? 'h-20 md:h-24 rounded-t-full' : 'h-24 md:h-28'}
                  ${layer.id === 1 ? 'rounded-b-2xl' : ''}
                  flex items-center justify-center transition-all duration-300
                  ${activeLayer === layer.id ? 'ring-4 md:ring-8 ring-pink-100' : ''}
                  shadow-xl
                `}
                style={{ marginTop: layer.id === 3 ? '0' : '-16px' }}
              >
                <span className="text-3xl md:text-4xl">{layer.icon}</span>
                <AnimatePresence>
                  {activeLayer === layer.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: 20 }}
                      className="absolute left-[110%] md:left-auto md:-right-32 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-2xl w-32 sm:w-48 md:w-56 border border-pink-50 z-50 pointer-events-none"
                    >
                      <h4 className="font-bold text-pink-600 text-sm md:text-base">{layer.name}</h4>
                      <p className="text-[10px] md:text-xs text-gray-500 leading-tight mt-1">{layer.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            {/* Cake Stand */}
            <div className="w-[120%] h-3 md:h-4 bg-gray-200 rounded-full mt-2 shadow-inner" />
            <div className="w-1/2 h-6 md:h-8 bg-gray-100 rounded-b-xl" />
          </div>

          {/* Controls / Info */}
          <div className="w-full sm:w-4/5 lg:w-1/3 space-y-3 md:space-y-4 px-2">
            {layers.map((layer) => (
              <motion.button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full p-4 md:p-6 rounded-2xl md:rounded-3xl text-left transition-all flex items-center gap-4
                  ${activeLayer === layer.id ? 'bg-pink-50 border-2 border-pink-200' : 'bg-gray-50 hover:bg-white border-2 border-transparent'}
                `}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl ${layer.color} shadow-sm border border-white shrink-0`}>
                  {layer.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{layer.name}</h3>
                  <p className="text-[10px] md:text-sm text-gray-400">Premium quality selection</p>
                </div>
              </motion.button>
            ))}
            
            <div className="pt-4 md:pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gray-800 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg"
              >
                Custom Order This Cake
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCake;
