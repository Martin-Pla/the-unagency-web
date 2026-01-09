import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import casareyImg from "figma:asset/8fdb56a539d6e9e8ce6cf447c18ae75f93c48bd2.png";
import gallusImg from "figma:asset/283b5359742fffc9889b0e4e829f4226488a5f47.png";
import aveDeFuegoImg from "figma:asset/4f63484a785ea90bf1c37f921dc7bccd2e709b79.png";
import blackAgnesImg from "figma:asset/524400c78a1f7a7b602605a5d3391663df251720.png";
import akbalImg from "figma:asset/22c09aaae748c1e25a6063f23e540e433ac8b158.png";

const projects = [
  {
    id: 1,
    title: "TEQUILA AVE DE FUEGO",
    category: "Packaging Design",
    image: aveDeFuegoImg,
  },
  {
    id: 2,
    title: "GALLUS",
    category: "Packaging Design",
    image: gallusImg,
  },
  {
    id: 3,
    title: "TEQUILA CASAREY",
    category: "Packaging Design",
    image: casareyImg,
  },
  {
    id: 4,
    title: "BLACK AGNES",
    category: "Packaging Design",
    image: blackAgnesImg,
  },
  {
    id: 5,
    title: "AKBAL GRAN RESERVA",
    category: "Packaging Design",
    image: akbalImg,
  },
  {
    id: 6,
    title: "VOID SPACE",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1614710516668-5d93150f628a?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "CONCRETE DREAMS",
    category: "Urban Planning",
    image: "https://images.unsplash.com/photo-1764572984487-9b330bd2f399?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "MIDNIGHT AURA",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1680946496238-5272d3c407fc?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "ECLIPSE WEAR",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1637536701369-f815af927b59?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "TYPOGRAPHY 01",
    category: "Print",
    image: "https://images.unsplash.com/photo-1613396725648-b37f63b856a9?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "NEON FLUX",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1702357430179-16b1ba1f5dd0?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "MODERN LIVING",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1680209080996-7f016174f2aa?q=80&w=1080&auto=format&fit=crop",
  },
];

const getSpanClass = (index: number) => {
  const position = index % 6; // Pattern repeats every 6 items
  
  if (position < 3) return "md:col-span-2"; // First 3 items (0,1,2) -> 3 per row
  if (position < 5) return "md:col-span-3"; // Next 2 items (3,4) -> 2 per row
  return "md:col-span-6"; // Last item (5) -> 1 per row
};

const getAspectRatioClass = (index: number) => {
  const position = index % 6;
  if (position === 5) return "aspect-[21/9]"; // Full width item -> shorter height (panoramic)
  return "aspect-[4/3]";
};

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section id="projects" className="relative z-10 px-5 md:px-20 py-20 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-mono text-white tracking-tighter">PROJECTS</h2>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index < 5 ? index * 0.1 : 0 }}
                className={`group relative flex flex-col gap-4 ${getSpanClass(index)}`}
              >
                <div className={`relative overflow-hidden border border-neutral-800 w-full ${getAspectRatioClass(index)}`}>
                  <div className="absolute inset-0 bg-neutral-900 z-0" />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  
                  {/* Overlay Text on Hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white text-black p-2 rounded-full">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-baseline border-b border-neutral-800 pb-4 group-hover:border-white transition-colors duration-300">
                  <h3 className="text-xl md:text-3xl font-mono text-neutral-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-sans text-neutral-500 uppercase tracking-widest group-hover:text-neutral-300 transition-colors">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-24 text-center">
             <button 
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 border border-neutral-700 text-neutral-300 font-mono hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
             >
                 {showAll ? "Show Less" : "View All Projects"}
             </button>
        </div>
      </div>
    </section>
  );
};
