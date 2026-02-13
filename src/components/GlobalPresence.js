import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    { x: '20%', y: '30%', name: 'North America' },
    { x: '45%', y: '25%', name: 'Europe' },
    { x: '70%', y: '40%', name: 'Asia Pacific' },
    { x: '55%', y: '60%', name: 'Middle East' },
  ];

  return (
    <section id="global" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Map Image (Abstract) */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain grayscale invert"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-2">Global Reach</h2>
          <h3 className="text-section mb-4">
            Serving Partners <span className="text-blue-500">Worldwide</span>
          </h3>
          <p className="text-subtitle text-slate-400 max-w-2xl mx-auto">
            With distribution centers and strategic partnerships across 5 continents, Chemcraft Global ensures timely delivery and local support.
          </p>
        </div>

        <div className="relative w-full h-[400px] md:h-[600px] bg-slate-800/50 rounded-2xl border border-white/5 shadow-2xl overflow-hidden backdrop-blur-sm">
           {/* Interactive Map Area */}
           <div className="absolute inset-0">
              {locations.map((loc, index) => (
                <motion.div
                  key={index}
                  style={{ left: loc.x, top: loc.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
                  className="absolute"
                >
                  <div className="relative group cursor-pointer">
                    <MapPin className="text-teal-500 w-8 h-8 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)] animate-bounce" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap">
                      {loc.name}
                    </div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            {[
                { label: "Research Centers", value: "5" },
                { label: "Manufacturing Plants", value: "8" },
                { label: "Distribution Hubs", value: "12" },
                { label: "Partner Network", value: "50+" },
            ].map((item, idx) => (
                <div key={idx}>
                    <p className="text-section text-white mb-1">{item.value}</p>
                    <p className="text-teal-400 text-sm">{item.label}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;
