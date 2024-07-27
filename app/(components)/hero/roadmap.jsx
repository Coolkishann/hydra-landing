// /app/components/Roadmap.js
import React from "react";

const Roadmap = () => {
  return (
    <div className="container mx-auto px-6 py-12 w-4/6">
      <h2 className="text-6xl font-bold text-center mb-4">Hydra Roadmap</h2>
      <p className="text-center text-gray-600 mb-28 text-xl max-w-xl mx-auto">
        This section keeps track of the roadmap’s project with info on planned milestones
      </p>
      <div className="relative space-y-6">
        <div className="hidden md:block absolute border-t border-gray-300 w-full top-6"></div>
        <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row justify-between items-center">
          <div className="relative flex flex-col items-center space-y-5 mb-8 md:mb-0">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 hover:bg-gray-400">
              Q1
            </div>
            <ul className="text-center text-gray-700 list-disc font-bold space-y-2 ">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="block md:hidden border-l-2 border-gray-300 h-12 mt-4"></div>
          </div>
          <div className="relative flex flex-col items-center space-y-5 mb-8 md:mb-0">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 hover:bg-gray-400">
              Q2
            </div>
            <ul className="text-center text-gray-700 list-disc font-bold space-y-2 ">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="block md:hidden border-l-2 border-gray-300 h-12 mt-4"></div>
          </div>
          <div className="relative flex flex-col items-center space-y-5 mb-8 md:mb-0">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 hover:bg-gray-400">
              Q3
            </div>
            <ul className="text-center text-gray-700 list-disc font-bold space-y-2 ">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="block md:hidden border-l-2 border-gray-300 h-12 mt-4"></div>
          </div>
          <div className="relative flex flex-col items-center space-y-5">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 hover:bg-gray-400">
              Q4
            </div>
            <ul className="text-center text-gray-700 list-disc font-bold space-y-2 ">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
