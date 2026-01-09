import React, { useState } from "react";
import { FluidBackground } from "./components/FluidBackground";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import logoImg from "figma:asset/73fc6d9c98f3c8b428987b1b0c9ff057d036651c.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-[60] bg-black/40 backdrop-blur-md border-b border-white/5"
      >
        <a href="#" className="block" onClick={() => setIsMenuOpen(false)}>
          <img src={logoImg} alt="The unAgency" className="h-12 w-auto object-contain" />
        </a>
        
        <button 
          onClick={toggleMenu}
          className="text-sm font-mono uppercase tracking-widest hover:line-through decoration-1 text-white"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 md:gap-12 text-center">
              {['Projects', 'About', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="text-4xl md:text-6xl font-mono uppercase tracking-widest hover:italic hover:text-neutral-400 transition-all cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex gap-8 text-xs font-mono text-neutral-500 uppercase tracking-widest"
            >
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FluidBackground />
      
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
