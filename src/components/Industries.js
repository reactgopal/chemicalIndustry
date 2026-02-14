import PageHeader from "./PageHeader";
import IndustryCard from "./IndustriesPage/IndustryCard";
import CTASection from "./IndustriesPage/CTASection";
import industriesList from "../utils/industriesDummy";
import bannerTwoImg from "../assets/images/panner/2.jpeg";

const Industries = () => {
  const industries = industriesList;
  console.log(industries);
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Industries We Serve"
        subtitle="Empowering diverse sectors with specialized chemical solutions tailored to unique industrial needs."
        bgImage={bannerTwoImg}
      />

      <div className="container mx-auto px-6 py-20">
        {/* Industry Cards Grid */}
        <div className="flex flex-col gap-24 max-w-7xl mx-auto">
          {industries?.map((industry, index) => (
            <IndustryCard
              key={industry?.name}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Industries;
