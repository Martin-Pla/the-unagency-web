import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const locations = [
  { city: "San Diego", country: "USA", time: "PST" },
  { city: "Tijuana", country: "MX", time: "PST" },
  { city: "Guadalajara", country: "MX", time: "CST" },
  { city: "London", country: "UK", time: "GMT" }
];

export const Contact = () => {
  return (
    <footer id="contact" className="relative z-10 bg-black text-white pt-32 pb-12 px-5 md:px-20 border-t border-neutral-900">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-5xl md:text-7xl font-mono mb-16 tracking-tighter">LET'S TALK</h2>
          
          <form className="space-y-12 max-w-xl">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="NAME" 
                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl font-mono focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl font-mono focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
              />
            </div>
            <div className="relative group">
              <textarea 
                placeholder="MESSAGE" 
                rows={1}
                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl font-mono focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 resize-none"
              />
            </div>
            
            <button type="button" className="group flex items-center gap-4 text-xl font-mono uppercase tracking-widest hover:text-neutral-400 transition-colors pt-8">
              Send Inquiry
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>

        {/* Locations & Info */}
        <div className="flex flex-col justify-between">
            <div className="space-y-12">
                <div className="border-t border-neutral-800 pt-8">
                    <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em] mb-8">Locations</h3>
                    <ul className="space-y-6">
                        {locations.map((loc) => (
                            <li key={loc.city} className="flex items-baseline justify-between group cursor-default">
                                <span className="text-3xl font-light hover:italic transition-all duration-300">{loc.city}</span>
                                <div className="flex gap-4 text-sm font-mono text-neutral-500">
                                    <span>{loc.country}</span>
                                    <span>{loc.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-t border-neutral-800 pt-8">
                    <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em] mb-8">Contact</h3>
                    <div className="flex flex-col gap-2 font-mono text-lg text-neutral-300">
                        <a href="mailto:hello@theunagencyco.com" className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-all">hello@theunagencyco.com</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end mt-24 text-xs font-mono text-neutral-600 uppercase">
                <span>© {new Date().getFullYear()} The unAgency</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
