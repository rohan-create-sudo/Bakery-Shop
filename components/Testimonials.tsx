
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDF5E6] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-800 mb-4">Sprinkles of Love</h2>
          <p className="text-gray-600">What our crumb-collectors have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: idx % 2 === 0 ? 2 : -2, scale: 1.02 }}
              className={`${t.color} p-8 rounded-[3rem] shadow-lg relative`}
            >
              <div className="mb-6 flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <p className="text-xs text-pink-600 uppercase font-bold tracking-tighter">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed text-lg">
                "{t.content}"
              </p>
              <div className="absolute -bottom-4 -right-4 text-5xl opacity-20 select-none font-serif">
                “
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
