"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./Icon_Hydra_colour.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-gray-900">HYDREALEDGER</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tokenomics</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Roadmap</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About Hydra</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800">Connect Wallet</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center bg-gray-50 space-y-3">
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">Products</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">Tokenomics</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">Features</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">Roadmap</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">About Hydra</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-gray-300">Community</a>
          <button className="block w-full bg-emerald-500 text-white px-4 py-2 rounded-full">Connect Wallet</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
