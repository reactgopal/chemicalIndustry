import Capabilities from "../components/AboutPage/Capabilities";
import Intro from "../components/AboutPage/Intro";
import Features from "../components/Features";
import Hero from "../components/Hero";
import CTASection from "../components/IndustriesPage/CTASection";
import ProductDisplayCategories from "../components/ProductPage/ProductDisplayCategories";

function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <div className="container mx-auto px-6 pt-20">
        <Intro />
      </div>
      <Features />
      <ProductDisplayCategories />
      <Capabilities />
      <CTASection />
    </div>
  );
}

export default Home;
