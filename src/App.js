import { Routes, Route } from "react-router-dom";

import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Quality from "./components/Quality";
import Manufacturing from "./components/Manufacturing";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./utils/useScrollTop";
import About from "./components/About";
import Products from "./components/ProductPage/Products";
import NotFountPage from "./pages/NotFountPage";
import ProductListOld from "./components/ProductPage/ProductListOld";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/product-list" element={<ProductListOld />} />
          <Route path="/*" element={<NotFountPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastClassName="custom-toast"
      />
    </>
  );
}

export default App;
