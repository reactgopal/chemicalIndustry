import { motion } from "framer-motion";
import {
  Factory,
  Droplet,
  Pickaxe,
  Pill,
  Sprout,
  Flame,
  UtensilsCrossed,
  Palette,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { name: "Plastic & Polymer", icon: Factory },
  { name: "Water Treatment", icon: Droplet },
  { name: "Mining & Drilling", icon: Pickaxe },
  { name: "Pharmaceuticals", icon: Pill },
  { name: "Agrochemicals", icon: Sprout },
  { name: "Petrochemicals", icon: Flame },
  { name: "Food & Beverage", icon: UtensilsCrossed },
  { name: "Paint & Coating", icon: Palette },
  { name: "Cosmetics", icon: Sparkles },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link to={"/industries"}>

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 group-hover:bg-teal-100/50"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-slate-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon size={32} />
                  </div>
                  
                  <h4 className="text-card mb-3 group-hover:text-teal-700 transition-colors">
                    {product.name}
                  </h4>
                  
                  <div className="flex items-center text-teal-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore Solutions</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
            View Full Product Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplayCategories;
