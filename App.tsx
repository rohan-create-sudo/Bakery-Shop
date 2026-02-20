
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import FloatingRider from './components/FloatingRider';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-pink-200 selection:text-pink-900">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <FloatingRider />
        
        <main className="pt-0">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
