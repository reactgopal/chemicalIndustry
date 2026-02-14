import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import IntroImg from "../../assets/images/intro.avif";
const Intro = () => {
  const list = [
    "Client-Centric Approach",
    "Experienced Professionals",
    "Integrity and Transparency",
    "24/7 Service",
    "Fast, efficient solutions with unwavering quality",
    "Effortless customization for solutions perfectly tailored to your needs",
    "Crafting innovative chemical solutions for a more refined and sustainable world ",
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
          PARSAN AGROCHEM started from the year of 2023 in India’s
          chemical hub “ GUJARAT “ , We have positioned ourselves as the leading
          Exporter & Importer - suppliers and stockiest of Industrial ,
          Specialty and Bulk Chemicals , Pharma Intermediates, Agro
          Intermediates and Dyes Intermediates, Cosmetics .
        </p>
        <p className="text-body mb-6">
          Gujarat is also home to numerous all-weather ports namely Kandla,
          Mundra and Hazira , Nhava Sheva which handle a major chunk of national
          cargo .We provide these products in diverse specifications to attain
          the complete satisfaction of the clients. Today, with significant
          industry experience the firm has evolved horizontally & vertically to
          become manufacturer & distributor,
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
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={IntroImg}
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
