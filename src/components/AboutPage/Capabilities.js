import React from "react";
import { motion } from "framer-motion";
import { Factory, Users, Globe, TrendingUp } from "lucide-react";

const Capabilities = () => {
  const stats = [
    { icon: <Factory size={32} />, value: "2000+", label: "Happy Clients" },
    { icon: <Users size={32} />, value: "20+", label: "Our Team" },
    { icon: <Globe size={32} />, value: "3+", label: "Year Of Experience" },
    { icon: <TrendingUp size={32} />, value: "1000+", label: "Success Rates" },
  ];

  return (
    <div 
    
    id="capabilities"
    className="container mx-auto mb-24 px-6">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">
          Our Capabilities
        </h3>
        <p className="text-slate-500">
          World-class infrastructure and expertise
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="mb-3 text-blue-600 bg-blue-50 p-3 rounded-full">
              {stat.icon}
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
              {stat.value}
            </h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {stat.label}
            </p>
            {stat.sub && (
              <p className="text-xs text-green-600 mt-1">{stat.sub}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
