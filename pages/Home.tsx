
import React from 'react';
import Hero from '../components/Hero';
import SignatureShowcase from '../components/SignatureShowcase';
import InteractiveCake from '../components/InteractiveCake';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Hero />
      
      {/* Why Us Section */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: 'Always Fresh', icon: '🍃', desc: 'Baked daily using the finest seasonal ingredients and organic dairy.' },
            { title: 'Eco-Friendly', icon: '📦', desc: '100% plastic-free packaging that looks amazing on your counter.' },
            { title: 'Global Flavors', icon: '🌎', desc: 'A fusion of secret recipes inspired by the world\'s best patisseries.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-pink-50/50 border border-pink-50 text-center flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl mb-5 md:mb-6 p-4 bg-pink-50 rounded-full">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 mb-3 md:mb-4">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SignatureShowcase />
      
      <InteractiveCake />

      {/* Visual Story Parallax */}
      <section className="h-[450px] md:h-[600px] relative overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1600" 
            alt="Bakery Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pink-900/40 backdrop-brightness-75" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 md:mb-8 leading-tight"
          >
            Come Visit <br /> Our Happy Place.
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl font-accent mb-10 max-w-md mx-auto"
          >
            The smell of cinnamon and freshly whipped cream awaits you.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-4 md:py-5 bg-white text-pink-600 rounded-full font-bold text-base md:text-lg shadow-2xl transition-all"
          >
            Find a Location
          </motion.button>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="absolute text-xl md:text-2xl" style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}>🍰</div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">Ready for some cake?</h2>
          <p className="text-lg md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto opacity-90 font-medium">
            Join the Sugar Crumb Club for weekly specials and a free treat on your birthday.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-white text-pink-600 rounded-[2rem] font-bold text-lg md:text-xl shadow-2xl transition-all"
            >
              Order Online Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-transparent border-2 border-white/50 text-white rounded-[2rem] font-bold text-lg md:text-xl transition-all"
            >
              Sign Up for Perks
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
