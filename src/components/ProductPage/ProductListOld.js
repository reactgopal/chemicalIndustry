import React, { useState, useMemo } from "react";
import { productCategories } from "../../utils/ProductDummy";
import ProductCategories from "./ProductCategories";
import ProductBody from "./ProductBody";
import { Search, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import introImg from "../../assets/images/intro.avif";

const ProductListOld = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredData = useMemo(() => {
    let data = productCategories;

    // Filter by Category
    if (selectedCategory !== "All") {
      data = data.filter((cat) => cat.name === selectedCategory);
    }

    // Since ProductBody expects a list of products, we need to flatten if "All" or just get the products of the single category?
    // If "All", we might want to show all products grouped or just a flat list.
    // The design usually implies clicking a category filters the view.
    // Let's create a flat list of products with their category info for searching.
    // OR we pass the relevant PROCUCTS list to ProductBody.

    return data;
  }, [selectedCategory]);

  // Derive the list of products to display
  const displayedProducts = useMemo(() => {
    let products = [];

    // Aggregate products based on filtered categories
    filteredData.forEach((cat) => {
      products = [
        ...products,
        ...cat.products.map((p) => ({ ...p, categoryName: cat.name })),
      ];
    });

    // Filter by Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.uses.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    return products;
  }, [filteredData, searchQuery]);

  // Find current category object for title/description in Body
  const currentCategoryObj =
    selectedCategory === "All"
      ? null
      : productCategories.find((c) => c.name === selectedCategory);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <img
          src={introImg}
          alt="Products Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 container mx-auto text-center max-w-3xl"
        >
          <h1 className="text-display mb-6">Our Products</h1>
          <p className="text-subtitle text-blue-100 mb-10">
            Comprehensive range of industrial and specialty chemicals for
            diverse applications. Explore our catalog tailored for Global
            Industries.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products by name, application, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-all shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Main Content Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-6 py-16"
      >
        {/* Mobile Filter Button */}
        <button
          className="lg:hidden w-full mb-8 flex items-center justify-between px-6 py-4 bg-white rounded-xl shadow-md border border-slate-100 text-slate-900 font-bold"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span>Browse Categories</span>
          <Menu className="text-teal-500" size={24} />
        </button>

        <div className="relative flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
            fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-24 lg:w-1/4 lg:bg-transparent lg:shadow-none lg:z-auto
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          >
            <div className="h-full overflow-y-auto lg:overflow-visible p-6 lg:p-0">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="text-xl font-bold text-slate-900">Categories</h3>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-500" />
                </button>
              </div>
              <ProductCategories
                categories={productCategories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />
            </div>
          </aside>

          {/* Product List */}
          <main className="w-full lg:w-3/4">
            <ProductBody
              category={currentCategoryObj}
              products={displayedProducts}
            />
            {displayedProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                <p className="text-slate-500 text-lg">
                  No products found matching your search.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </main>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductListOld;
