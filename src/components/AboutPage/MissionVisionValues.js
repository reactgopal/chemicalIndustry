import { motion } from "framer-motion";
import { Target, Eye, Heart, Check } from "lucide-react";

const MissionVisionValues = () => {
  const values = [
    "Ethical business practices with integrity",
    "Loyalty to the commitments",
    "Respect for the human values.",
    "Focus on safety and environment.",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
          <Target size={28} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          To create enduring value for the government agencies, financial
          institutions, vendors, cross functional teams and the management We
          are dedicated to formulating innovative, safe, and efficacious
          solutions that address unmet medical needs and improve the quality of
          life for individuals worldwide. Production and sales of consistent and
          best quality colours, with the best possible innovation, technology
          and environmental care.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500"
      >
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
          <Eye size={28} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          To manufacture quality and consistently diverse specialty chemicals
          through constant and innovative R&D which is customer centric and has
          a global reach. To help enrich the quality of life of the local
          communities and preserve the ecological balance and heritage through a
          “strong & safe environment consciousness” To create enduring value for
          the government agencies, financial institutions, vendors, cross
          functional teams and the management.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-600"
      >
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-6">
          <Heart size={28} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
        <ul className="space-y-3">
          {values.map((val, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-slate-600 text-sm"
            >
              <Check size={16} className="text-teal-500" />
              {val}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default MissionVisionValues;
