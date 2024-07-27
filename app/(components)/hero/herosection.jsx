import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white-950 text-black py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Presenting IDO Hydra Pre-sale</h1>
          <p className="text-gray-700 mb-6">At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800">Connect Wallet</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/API-Docs.png" alt="Placeholder" className="w-full max-w-[600px] h-1/2 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
