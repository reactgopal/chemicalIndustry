import React from "react";

const ImpactStats = () => {
  return (
    <div className="bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden mb-24">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
        <div className="p-4">
          <h4 className="text-4xl font-bold mb-2">500+</h4>
          <p className="text-blue-200">Global Clients</p>
        </div>
        <div className="p-4">
          <h4 className="text-4xl font-bold mb-2">50+</h4>
          <p className="text-blue-200">Countries Served</p>
        </div>
        <div className="p-4">
          <h4 className="text-4xl font-bold mb-2">1200+</h4>
          <p className="text-blue-200">Products Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
