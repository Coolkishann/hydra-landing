"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/hoobank.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-bold text-white">Swap</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-4">
          <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">Swap</a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">Limit</a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">Buy</a>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full text-xl hover:bg-pink-500">Connect</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block text-gray-400 hover:text-gray-300 text-xl">Swap</a>
          <a href="#" className="block text-gray-400 hover:text-gray-300 text-xl">Limit</a>
          <a href="#" className="block text-gray-400 hover:text-gray-300 text-xl">Buy</a>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full text-xl hover:bg-pink-500 w-full">Connect</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
