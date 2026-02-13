import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-teal-500/30 rounded-full bg-teal-500/10 backdrop-blur-sm">
            <span className="text-teal-400 font-semibold tracking-wide text-sm uppercase">
              Global Chemical Solutions
            </span>
          </div>

          <h1 className="text-display mb-8">
            Innovating for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Sustainable
            </span>{" "}
            Future
          </h1>

          <p className="text-subtitle mb-10 max-w-2xl">
            Delivering high-purity industrial chemicals and custom formulations
            to power industries worldwide. Innovation meets reliability at
            Chemcraft Global.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"/product"}
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to={"/"}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-semibold backdrop-blur-sm transition-all flex items-center justify-center"
            >
              Our Capabilities
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Abstract Animated Element - imitating molecules */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
      />
    </div>
  );
};

export default Hero;
