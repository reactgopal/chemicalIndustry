import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const IndustryCard = ({ industry, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-stretch gap-8 lg:gap-12 w-full`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl min-h-[300px] lg:min-h-[400px]">
        <img
          src={industry?.image}
          alt={industry?.name}
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-6 left-6 text-white z-10 w-full pr-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-amber-400 p-2 rounded-lg text-slate-900 shadow-lg shadow-amber-400/20">
              {industry.icon}
            </div>
          </div>
          <h3 className="text-section text-white drop-shadow-md">
            {industry.name}
          </h3>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-400 hover:shadow-2xl transition-shadow duration-300 h-full">
          <p className="text-subtitle text-slate-600/90 mb-6 font-medium">
            {industry.description}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-4 border-b border-blue-100 pb-2 inline-block">
                Key Chemicals
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {industry.chemicals?.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 group/item">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/item:bg-blue-600 transition-colors"></span>
                    <span className="text-slate-700 text-sm font-medium group-hover/item:text-blue-700 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {industry.applications && (
              <div>
                <h4 className="text-blue-900 font-bold text-sm uppercase tracking-wider mb-2 border-b border-blue-100 pb-2 inline-block">
                  Applications
                </h4>
                <p className="text-body text-sm">
                  {industry.applications}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
