import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import industriesList from "../utils/industriesDummy";
import logo from "../assets/images/logo.png"; // added logo import

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Parsan Agrochem"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight leading-none mt-[6px]">
                PARSAN <span className="text-teal-500">AGROCHEM</span>
              </span>
            </Link>
            <p className="text-body text-sm text-slate-400 mb-6">
              Global leader in industrial chemical manufacturing and
              distribution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-card text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-teal-400 transition-colors"
                >
                  Products & Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-teal-400 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/manufacturing"
                  className="hover:text-teal-400 transition-colors"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="hover:text-teal-400 transition-colors"
                >
                  Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-card text-white mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              {industriesList?.slice(0, 5).map((category, index) => (
                <li key={index}>
                  <Link
                    to="/products"
                    className="hover:text-teal-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-card text-white mb-6">Stay Connected</h4>
            <p className="text-body text-sm text-slate-400 mb-4">
              Get updates on new chemical solutions, industry trends, and
              regulatory developments.
            </p>

            <Link
              to="/contact"
              className="px-5 py-2 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
          <p>© 2026 PARSAN AGROCHEM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
