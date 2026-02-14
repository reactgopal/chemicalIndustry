import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  const [isScrolling, setIsScrolling] = useState(false); // Default to false;

  const handleScroll = () => {
    const scrollY = window.scrollY; 
    if (scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className={`min-h-screen  ${homePage ? "" : "pt-12"}`}>
        <Outlet />
      </main>
      <Footer />
      {isScrolling && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-teal-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-teal-700 transition-colors"
          >
            ↑
          </button>
        </div>
      )}
    </>
  );
};

export default MainLayout;
