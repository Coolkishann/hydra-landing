// /app/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white-950 text-black py-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center ml-10">
        <div className="md:w-1/2 text-center md:text-left mx-5">
          <h1 className="text-6xl font-bold mb-4">Presenting IDO Hydra Pre-sale</h1>
          <p className="text-gray-700 mb-6">At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-500">Connect Wallet</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="p-6">
            <img src="/API-Docs.png" alt="Placeholder" className="h-4/5 w-4/5 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
