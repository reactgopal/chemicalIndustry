import React from 'react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
  const infrastructure = [
    {
      title: "Manufacturing Plants",
      desc: "State-of-the-art production facilities with automated processes.",
      badge: "50,000 MT/Year"
    },
    {
      title: "Quality Control Labs",
      desc: "Advanced testing laboratories with latest analytical equipment.",
      badge: "HPLC, GC MS, ICP-MS"
    },
    {
      title: "Storage & Warehousing",
      desc: "Temperature controlled storage with safety compliance.",
      badge: "10,000 MT"
    },
    {
      title: "R&D Center",
      desc: "Dedicated research facility for custom formulations.",
      badge: "25+ Scientists"
    }
  ];

  return (
    <div className="mb-24">
       <div className="text-center mb-12">
         <h3 className="text-3xl font-bold text-slate-900 mb-2">Infrastructure & Facilities</h3>
         <p className="text-slate-500">State-of-the-art facilities ensuring quality and efficiency</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {infrastructure.map((item, index) => (
           <motion.div 
             key={index}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.1, duration: 0.5 }}
             className="bg-white p-8 rounded-xl shadow-md border border-slate-100 flex flex-col justify-between"
           >
             <div>
               <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
               <p className="text-slate-600 mb-6 text-sm">{item.desc}</p>
             </div>
             <div>
               <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
                 {item.badge}
               </span>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
  );
};

export default Infrastructure;
