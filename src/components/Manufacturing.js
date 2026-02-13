import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  FlaskConical,
  Warehouse,
  Settings,
  Users,
  Truck,
  Check,
  FileText,
} from "lucide-react";
import PageHeader from "./PageHeader";
import RAndD from "../assets/images/R&D.jpeg";
import Warehousing from "../assets/images/Warehousing.jpeg";

const Manufacturing = () => {
  const facilities = [
    {
      title: "Manufacturing Plants",
      icon: <Factory size={32} />,
      desc: "3 state-of-the-art production units with a combined capacity of 50,000 MT/annum.",
      image: Warehousing,
    },
    {
      title: "R&D Center",
      icon: <FlaskConical size={32} />,
      desc: "Dedicated innovation hub focused on custom synthesis and process optimization.",
      image: RAndD,
    },
    {
      title: "Warehousing",
      icon: <Warehouse size={32} />,
      desc: "Climate-controlled storage ensuring product stability and safety.",
      image: Warehousing,
    },
  ];

  const processSteps = [
    { title: "Raw Material", icon: <Warehouse /> },
    { title: "Reaction", icon: <FlaskConical /> },
    { title: "Distillation", icon: <Settings /> },
    { title: "Filtration", icon: <Check /> },
    { title: "Quality Check", icon: <FileText /> }, // Need FileText import or swap icon
    { title: "Dispatch", icon: <Truck /> },
  ];

  const stats = [
    { value: "50,000+", label: "Metric Tons / Year" },
    { value: "3", label: "Manufacturing Units" },
    { value: "24/7", label: "Operations" },
    { value: "500+", label: "Skilled Workforce" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Infrastructure & Manufacturing"
        subtitle="Advanced facilities powered by cutting-edge technology to deliver superior quality chemicals."
        bgImage="https://images.unsplash.com/photo-1542382156-9a5c8846af95?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-6 py-20">
        {/* Facilities Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">
              Our Capabilities
            </h2>
            <h3 className="text-section">
              World-Class Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 -mt-16 relative z-10 shadow-md border border-white">
                    {facility.icon}
                  </div>
                  <h4 className="text-card mb-3">
                    {facility.title}
                  </h4>
                  <p className="text-body">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-24">
          <h3 className="text-section mb-12 text-center">
            Production Process
          </h3>
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md border border-slate-100"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                    {step.icon}
                  </div>
                  <span className="font-semibold text-slate-700 text-sm text-center">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-display text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-400 font-medium uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
