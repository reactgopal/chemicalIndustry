import { motion } from "framer-motion";
import PageHeader from "../PageHeader";
import introImg from "../../assets/images/intro.avif";
import industriesList from "../../utils/industriesDummy";

const Products = () => {
  const industries = industriesList;

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Our Products"
        subtitle="Comprehensive range of industrial and specialty chemicals for diverse applications."
        bgImage={introImg}
      />

      <div className="container mx-auto px-6 py-20">
        {/* Facilities Grid */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries?.map((facility, index) => (
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
                    src={facility?.image}
                    alt={facility?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 -mt-16 relative z-10 shadow-md border border-white">
                    {facility?.icon}
                  </div>
                  <h4 className="text-card mb-3">{facility?.name}</h4>
                  {/* <p className="text-body">{facility?.description}</p> */}
                  {/* chemical list map */}
                  <div className="mt-6">
                    {/* <h5 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">
                      Chemicals
                    </h5> */}
                    {/* <ul className="flex flex-wrap gap-2">
                      {facility?.chemicals.map((chemical, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-body"
                        >
                          <Check size={16} />
                          {chemical}
                        </li>
                      ))}
                    </ul> */}

                    {facility.chemicals &&
                    typeof facility.chemicals[0] === "object" ? (
                      <div className="space-y-4">
                        {facility.chemicals.map((subcategory, index) => (
                          <div key={index}>
                            <h5 className="text-teal-700 font-semibold text-sm mb-2">
                              {subcategory.name}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {subcategory.items.map((item, i) => (
                                <span
                                  key={i}
                                  className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md border border-slate-200"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                        {facility.chemicals?.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 group/item"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/item:bg-blue-600 transition-colors"></span>
                            <span className="text-slate-700 text-sm font-medium group-hover/item:text-blue-700 transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
