import React from "react";
import { motion } from "framer-motion";


const PageHeader = ({ title, subtitle, bgImage = "hero_background.jpg" }) => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background */}
      {/* Background */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-display mb-3 sm:mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-subtitle max-w-2xl mx-auto px-2 sm:px-0">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
