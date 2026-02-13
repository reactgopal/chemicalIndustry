import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCurrentPage = location.pathname;
  // Check if we are on the home page
  const isHome = location.pathname === "/";

  const navLinks = [
    // Keep as scroll on home for now, or move to separate page? User asked for enterprise pages.
    // Let's assume Products stays as a section on Home for now, or we can make it a page.
    // Plan says "Industries" is a Page. "Quality" is a page. "Manufacturing" is a page.
    // Let's update navLinks to reflect the new structure.
    { name: "Home", path: "/", isScroll: false },
    { name: "About us", path: "/about", isScroll: false },
    { name: "Product", path: "/product", isScroll: false },
    // { name: "Manufacturing", path: "/manufacturing", isScroll: false },
    // { name: "Quality", path: "/quality", isScroll: false },
    { name: "Industries", path: "/industries", isScroll: false },
    { name: "Contact", path: "/contact", isScroll: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-14 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span
            className={`text-2xl font-bold tracking-tight ${scrolled || !isHome ? "text-slate-900" : "text-white"}`}
          >
            Nilkanth<span className="text-teal-500">OPC</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-t  eal-500 border-b-2  ${
                scrolled || !isHome ? "text-slate-800" : "text-slate-200"
              }
              ${isCurrentPage === link.path ? "border-blue-900 " : "border-transparent"}
              `}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-8 py-2 text-sm font-bold rounded-full transition-all duration-300 
shadow-lg hover:shadow-xl inline-flex items-center gap-2 transform hover:-translate-y-0.5

${
  scrolled || !isHome
    ? "bg-teal-600 text-white hover:bg-teal-700"
    : "bg-white text-teal-700 hover:bg-teal-50"
}`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg ${scrolled || !isHome ? "text-slate-900" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-slate-600 font-medium hover:text-teal-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full py-3 px-8 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2
                "
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
