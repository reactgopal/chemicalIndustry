import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Leaf,
  FileText,
  ChevronDown,
  CheckCircle,
  Activity,
  Droplet,
} from "lucide-react";
import PageHeader from "./PageHeader";
import Testing from "../assets/images/Testing.jpeg";

const Quality = () => {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      title: "ISO 9001:2015",
      desc: "Quality Management System",
      color: "blue",
      icon: <Award size={32} />,
    },
    {
      title: "ISO 14001:2015",
      desc: "Environmental Management",
      color: "green",
      icon: <Leaf size={32} />,
    },
    {
      title: "ISO 45001:2018",
      desc: "Occupational Health & Safety",
      color: "orange",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "GMP Certified",
      desc: "Good Manufacturing Practice",
      color: "teal",
      icon: <CheckCircle size={32} />,
    },
  ];

  const qcSteps = [
    {
      title: "Raw Material Testing",
      desc: "Strict purity analysis of all incoming chemicals.",
    },
    {
      title: "In-Process Control",
      desc: "Real-time monitoring of reaction parameters.",
    },
    {
      title: "Final Product Analysis",
      desc: "HPLC & GC verification of finished batches.",
    },
    {
      title: "Packaging Inspection",
      desc: "Integrity checks for safe transport.",
    },
  ];

  const documents = [
    {
      title: "Technical Data Sheets (TDS)",
      content: "Comprehensive specifications for all our products.",
    },
    {
      title: "Material Safety Data Sheets (MSDS)",
      content: "Safety instructions and hazard handling protocols.",
    },
    {
      title: "Certificate of Analysis (COA)",
      content: "Batch-specific quality verification reports.",
    },
    {
      title: "REACH Compliance",
      content: "Documentation for European market regulatory adherence.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Quality & Compliance"
        subtitle="Uncompromising standards for safety, purity, and environmental responsibility."
        bgImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-6 py-20">
        {/* Certifications Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">
              Accreditations
            </h2>
            <h3 className="text-section">Global Standards We Uphold</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-${cert.color}-50 flex items-center justify-center text-${cert.color}-600 mb-6`}
                >
                  {cert.icon}
                </div>
                <h4 className="text-card mb-2">{cert.title}</h4>
                <p className="text-body text-sm">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* QC Steps */}
        <div className="mb-24 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">
              Quality Control
            </h2>
            <h3 className="text-section mb-6">
              Rigorous Testing at Every Stage
            </h3>
            <p className="text-body mb-8">
              Our distinct quality control protocol ensures zero defects. From
              raw material intake to final dispatch, every kilogram of product
              undergoes stringent analysis in our state-of-the-art laboratories.
            </p>

            <div className="space-y-6">
              {qcSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={Testing}
                alt="Laboratory Testing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
            </div>
            {/* Floating Stat */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <Activity className="text-teal-500" size={32} />
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">
                    Accuracy
                  </p>
                  <p className="text-2xl font-bold text-slate-900">99.98%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Environmental Responsibility - Green Section */}
        <div className="mb-24 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Leaf size={48} className="text-emerald-400 mb-6" />
              <h3 className="text-section mb-4">Sustainable Chemistry</h3>
              <p className="text-subtitle text-emerald-100 mb-8">
                We believe in chemistry that cares. Our zero-liquid discharge
                (ZLD) plants and solvent recovery systems minimize environmental
                impact while maximizing efficiency.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Solvent Recovery</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-emerald-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Energy Efficiency</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-emerald-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <Droplet size={32} className="text-blue-300 mb-3" />
                  <h4 className="font-bold mb-1">Water Treatment</h4>
                  <p className="text-sm text-emerald-100">
                    Advanced effluent treatment plants.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <ShieldCheck size={32} className="text-emerald-300 mb-3" />
                  <h4 className="font-bold mb-1">Worker Safety</h4>
                  <p className="text-sm text-emerald-100">
                    Zero-accident workplace policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Accordion */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-section">Compliance Documentation</h3>
            <p className="text-body">
              Access vital safety and technical information.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveTab(activeTab === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="text-teal-500" />
                    <span className="font-semibold text-slate-900">
                      {doc.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`text-slate-400 transition-transform ${activeTab === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm border-t border-slate-100 bg-slate-50/50">
                        {doc.content}
                        <div className="mt-4">
                          <button
                            type="button"
                            className="text-blue-600 font-semibold text-xs hover:underline"
                          >
                            Download PDF &rarr;
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
