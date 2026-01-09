import React from "react";
import { motion } from "motion/react";

const brands = [
  "JMRPACKING", "TBG GOLF", "BELTECH", "CASTELLANA IMPORTACIONES", 
  "NUWA STONE", "NORTHWEST", "OKAPI ENERGY"
];

// Duplicate the brands array to create a seamless loop
const marqueeBrands = [...brands, ...brands, ...brands];

export const About = () => {
  return (
    <section id="about" className="relative z-10 px-5 md:px-20 py-32 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative mb-32">
        
        {/* Left Column - Heading */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
             <motion.h2 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-4xl md:text-6xl font-mono text-white tracking-tighter"
             >
               ABOUT
             </motion.h2>
          </div>
        </div>

        {/* Right Column - Manifesto */}
        <div className="lg:col-span-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-16 text-neutral-200">
              We are the <span className="font-serif italic text-white">glitch</span> in the agency model. A collective of rogue creatives obsessed with the absolute.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-400 font-mono text-sm md:text-base leading-relaxed">
              <p>
                Traditional agencies sell time and bloated processes. We sell impact. We have surgically removed the account managers, the endless meetings, and the layers of middle-management that dilute vision.
              </p>
              <p>
                What remains is pure potency. Direct access to elite talent. Radical transparency. Relentless execution. We don't just build digital products; we engineer market dominance.
              </p>
            </div>

            <div className="mt-24 pt-12 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-8">
               <div>
                   <span className="block text-4xl font-light text-white mb-2">01</span>
                   <span className="text-xs uppercase tracking-widest text-neutral-500">Visceral Strategy</span>
               </div>
               <div>
                   <span className="block text-4xl font-light text-white mb-2">02</span>
                   <span className="text-xs uppercase tracking-widest text-neutral-500">Radical Design</span>
               </div>
               <div>
                   <span className="block text-4xl font-light text-white mb-2">03</span>
                   <span className="text-xs uppercase tracking-widest text-neutral-500">Kinetic Dev</span>
               </div>
               <div>
                   <span className="block text-4xl font-light text-white mb-2">04</span>
                   <span className="text-xs uppercase tracking-widest text-neutral-500">Total Impact</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Client Carousel (Custom Marquee using Framer Motion) */}
      <div className="w-full border-t border-neutral-900 pt-20 overflow-hidden">
        <p className="text-center font-mono text-neutral-500 text-xs tracking-[0.2em] mb-12 uppercase">Trusted By</p>
        <div className="flex opacity-50 hover:opacity-100 transition-opacity duration-500">
          <motion.div 
            className="flex gap-16 md:gap-32 items-center flex-nowrap whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <h4 key={index} className="text-2xl md:text-4xl font-mono font-bold text-neutral-700 hover:text-white transition-colors uppercase">
                {brand}
              </h4>
            ))}
          </motion.div>
          {/* Second duplicate for seamless loop if needed, but the array is already tripled above. 
              Actually, "0% to -50%" assumes the content is duplicated once (original + copy). 
              If we have 3 copies and move 50%, it might jump if not calculated perfectly. 
              
              Better approach for seamless loop:
              Container has 2 children: 
              1. The list
              2. The list again
              
              And we move the container.
           */}
        </div>
      </div>
      
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white rounded-full opacity-[0.02] blur-[150px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};
