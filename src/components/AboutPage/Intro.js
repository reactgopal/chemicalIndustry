import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import introImg1 from "../../assets/images/panner/4.jpeg";
const Intro = () => {
  const list = [
    "Client-Centric Approach",
    "Experienced Professionals",
    "Integrity and Transparency",
    "24/7 Service",
    "Fast, efficient solutions with unwavering quality",
    "Effortless customization for solutions perfectly tailored to your needs",
    "Crafting innovative chemical solutions for a more refined and sustainable world",
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2"
      >
        <h2 className="text-section mb-6">Company Overview</h2>
        <p className="text-body mb-6">
          PARSAN AGROCHEM was established in 2003 in India’s chemical hub,
          Gujarat. We have positioned ourselves as a leading exporter, importer,
          supplier, and stockist of industrial, specialty, and bulk chemicals,
          pharma intermediates, agro intermediates, dye intermediates, and
          cosmetic chemicals.
        </p>

        <p className="text-body mb-6">
          Gujarat is home to major all-weather ports such as Kandla, Mundra,
          Hazira, and Nhava Sheva, which handle a significant share of the
          nation’s cargo. We provide our products in diverse specifications to
          ensure complete customer satisfaction. With significant industry
          experience, the firm has evolved both horizontally and vertically to
          become a trusted manufacturer and distributor.
        </p>
        <ul className="space-y-4 mt-8">
          {list.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-body">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={introImg1}
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            alt="Industrial Plant at Night"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
