import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, FlaskConical, Download } from "lucide-react";

const ProductBody = ({ category, products }) => {
  // If no specific category is selected (or "All" logic handled in parent), show title from prop or default

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4">
        <h2 className="text-section mb-2">
          {category ? category.name : "All Products"}
        </h2>
        <p className="text-body">
          {category
            ? "Essential chemicals for manufacturing and industrial processes"
            : "Comprehensive range of industrial and specialty chemicals"}
        </p>
      </div>

      <div className="grid gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Product Icon/Image placeholder */}
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                {/* Using generic icon since individual products don't have icons in dummy data, or use category icon passed down? 
                    For now, a generic Flask or just the first letter.
                 */}
                <FlaskConical size={26} />
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-card mb-1 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    {/* Optional: Add CAS/Grade if available in data, mostly not in dummy data yet except name implies */}
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
                        Industrial Grade
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-900 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-lg transition-colors border border-slate-200">
                    <Download size={16} /> Datasheet
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                  <div>
                    <span className="block font-semibold text-slate-900 mb-1">
                      Applications:
                    </span>
                    {product.uses}
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900 mb-1">
                      Packaging:
                    </span>
                    {product.packaging}
                  </div>
                </div>

                <p className="text-body mb-6 border-t border-slate-100 pt-4">
                  {product.description}
                </p>

                <button className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2">
                  Request Quote <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductBody;
