import React from "react";
import PageHeader from "./PageHeader";
import Intro from "./AboutPage/Intro";
import MissionVisionValues from "./AboutPage/MissionVisionValues";
import Capabilities from "./AboutPage/Capabilities"; 
import bannerOneImg from "../assets/images/panner/1.jpeg";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="About Parsan Agrochem"
        subtitle="Bridging the gap between scientific innovation and industrial application since 2003."
        bgImage={bannerOneImg}
      />

      <div className="container mx-auto px-6 py-20">
        <Intro />
        <MissionVisionValues />
        <Capabilities /> 
      </div> 
    </div>
  );
};

export default About;
