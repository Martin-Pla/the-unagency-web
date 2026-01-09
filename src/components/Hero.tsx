import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowDown } from "lucide-react";
import logoImg from "figma:asset/73fc6d9c98f3c8b428987b1b0c9ff057d036651c.png";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax for logo and text
  const logoY = useTransform(scrollY, [0, 500], [0, 200]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Mouse interaction for subtle spotlight/glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    // Calculate position relative to center (for parallax movement)
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-10 text-center overflow-hidden bg-neutral-950"
    >
      {/* Background Gradient Spot that follows mouse subtly - creates a "serious" atmosphere */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 50%)`,
          x: useTransform(springX, (val) => val * -2), // Inverse movement
          y: useTransform(springY, (val) => val * -2),
        }}
      />

      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center h-full relative z-20">
        <motion.div
          style={{ 
            y: logoY,
            x: springX, // Subtle horizontal follow
            y: springY, // Subtle vertical follow (combined with scroll parallax via transform template if needed, but motion handles arrays/overrides well)
          }}
          initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // "Cinematic" easing
          className="relative z-20"
        >
          <img 
            src={logoImg} 
            alt="The unAgency" 
            className="w-[80vw] max-w-[1000px] object-contain select-none drop-shadow-2xl" 
          />
          
          {/* Subtle sheen/reflection effect container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-24 relative z-10"
        >
          <p className="text-sm md:text-lg font-mono text-neutral-400 tracking-widest max-w-2xl uppercase leading-relaxed mx-auto">
            Where creativity meets strategy. <br className="hidden md:block" /> 
            We don't follow the rules—we <span className="text-white font-bold glow-text">rewrite</span> them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="mt-12 md:mt-auto mb-8 flex flex-col items-center gap-4 relative z-20"
        >
          <span className="text-[10px] tracking-[0.3em] font-mono text-neutral-600 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-white/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden">
         <motion.h2 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.03 }}
           transition={{ duration: 2, delay: 0.5 }}
           className="text-[25vw] font-bold text-white whitespace-nowrap blur-sm select-none"
         >
           UNAGENCY
         </motion.h2>
      </div>
      
      {/* Noise texture overlay for grit */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </section>
  );
};
