import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Initial check
    if (window.scrollY > 100) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-20 mix-blend-difference text-white"
    >
      <AnimatePresence>
        {showLogo && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono tracking-widest font-bold"
          >
            THE UNAGENCY
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`hidden md:flex gap-12 text-sm font-mono tracking-widest ${!showLogo ? 'ml-auto' : ''}`}>
        {['WORK', 'AGENCY', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-neutral-400 transition-colors cursor-pointer group relative">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button className="text-sm font-mono tracking-widest">MENU</button>
      </div>
    </motion.nav>
  );
};
