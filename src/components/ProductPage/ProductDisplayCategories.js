import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import industries from "../../utils/industriesDummy";

const ProductDisplayCategories = () => {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">
            Industries We Serve
          </h2>
          <h3 className="text-section mb-4">
            Our diverse range of chemicals serves multiple industries with
            specialized solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            return (
              <Link to={"/industries"} key={index} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h4 className="text-white text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                      {industry.name}
                    </h4>

                    <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                      <div className="flex items-center text-teal-300 font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <span>Explore Solutions</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="px-8 py-4 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Explore All Industries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplayCategories;
