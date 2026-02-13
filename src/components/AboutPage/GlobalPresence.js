import React from 'react';

const GlobalPresence = () => {
  return (
    <div className="bg-slate-900 py-16 text-white text-center">
       <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-2">Global Presence</h3>
          <p className="text-slate-400 mb-12">Serving clients across continents with reliable supply chain</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h4 className="font-bold mb-2">North America</h4>
                <p className="text-xs text-slate-400">USA, Canada, Mexico</p>
             </div>
             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h4 className="font-bold mb-2">Europe</h4>
                <p className="text-xs text-slate-400">UK, Germany, France, Italy</p>
             </div>
             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h4 className="font-bold mb-2">Asia-Pacific</h4>
                <p className="text-xs text-slate-400">India, China, Japan, Australia</p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default GlobalPresence;
