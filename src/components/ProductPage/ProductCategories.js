import React from "react";
import { motion } from "framer-motion";

const ProductCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const handleCategoryClick = (categoryName) => {
    onSelectCategory(categoryName);
    // Scroll to top of the product list when a category is selected
    handleScrollToTop();
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
      <h3 className="text-card text-slate-900 mb-6 px-2 hidden lg:block">
        Product Categories
      </h3>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => onSelectCategory("All")}
          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium flex items-center justify-between group ${
            selectedCategory === "All"
              ? "bg-blue-900 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50 hover:text-blue-900"
          }`}
        >
          <span>All Products</span>
          {selectedCategory === "All" && (
            <motion.div
              layoutId="active-indicator"
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          )}
        </button>

        {categories.map((category) => (
          <button
            key={category.name}
            // onClick={() => onSelectCategory(category.name)}
            onClick={() => handleCategoryClick(category.name)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium flex items-center justify-between group ${
              selectedCategory === category.name
                ? "bg-blue-900 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50 hover:text-blue-900"
            }`}
          >
            <span className="flex items-center gap-3">
              {/* <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">
                {category.icon}
              </span> */}
              {category.name}
            </span>
            {selectedCategory === category.name && (
              <motion.div
                layoutId="active-indicator"
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
