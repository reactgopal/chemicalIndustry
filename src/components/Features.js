import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Scale, Truck } from "lucide-react";


const features = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-teal-500" />,
    title: "Commitment to Quality",
    description:
      "Quality is the cornerstone of our operations. From meticulously sourced raw materials to state-of-the-art manufacturing processes, every step is conducted under strict quality control measures, ensuring unmatched purity, potency, and efficacy.",
  },
  {
    icon: <Scale className="w-12 h-12 text-blue-500" />, // You can import Scale from lucide-react
    title: "Ethical Business Approach",
    description:
      "We uphold the highest standards of ethical conduct, integrity, and transparency in all aspects of our operations. Our unwavering principles drive sustainable growth and long-term trust.",
  },
  {
    icon: <Globe2 className="w-12 h-12 text-indigo-500" />,
    title: "Global Reach, Local Commitment",
    description:
      "With a worldwide presence, we serve clients across continents with reliable supply solutions, while remaining deeply committed to supporting and uplifting the local communities where we operate.",
  },
  {
    icon: <Truck className="w-12 h-12 text-green-500" />, // Import Truck from lucide-react
    title: "Price & Delivery Commitment",
    description:
      "We understand that pricing and delivery are critical to your business decisions. We provide the best value for your investment, backed by prompt and dependable delivery services.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-section mb-4">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Chemcraft Advantage
            </span>
          </h3>
          <p className="text-subtitle text-slate-400 max-w-2xl mx-auto">
            Partnering with us means choosing reliability, innovation, and a
            commitment to excellence in every drop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 p-3 bg-slate-800 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h4 className="text-card mb-3" style={{ color: "white" }}>
                {feature.title}
              </h4>
              <p className="text-body text-slate-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
