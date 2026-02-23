import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/Testing.jpeg";
import industriesList from "../../utils/industriesDummy";

const CTASection = () => {
  return (
    <section
      className={`relative bg-fixed bg-center bg-cover py-24`}
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We will provide the best Chemicals service
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-200">
          {industriesList?.map((category) => category.name).join(" | ")}
        </p>

        <Link
          to={"/contact"}
          className="px-8 py-4 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          Contact Us <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
