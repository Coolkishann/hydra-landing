// /app/components/ProductsSection.js
import React from 'react';

const ProductsSection = () => {
  return (
    <section className="bg-gray-50 text-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Preview of the products</h2>
        <p className="text-gray-600 mb-12">This section holds the products with a short description of each of them</p>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src="/mobile.jpg" alt="Freedom Phone" className="object-cover w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 p-4 text-left">
              <h3 className="text-2xl font-bold">Freedom Phone</h3>
              <p className="text-gray-600">The first release of FDG-Freiheitsfon, which will also be released in its international version with the name "Hydraledger's Freedom Phone". Our community smartphone with the highest data protection and full privacy.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 p-4">
              <img src="/mobile.jpg" alt="Communicator App" className="object-cover w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 p-4 text-left">
              <h3 className="text-2xl font-bold"> First quantum-resistant hardware wallet card</h3>
              <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere doloremque dolor totam eius officia exercitationem praesentium dolore hic error?</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src="/mobile.jpg" alt="Connector Device" className="object-cover w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 p-4 text-left">
              <h3 className="text-2xl font-bold">Quantum-resistant  decentralized cloud storage solution</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga qui at molestias dolor, ea sit ut voluptas accusantium voluptatem?.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 p-4">
              <img src="/mobile.jpg" alt="Communicator App" className="object-cover w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 p-4 text-left">
              <h3 className="text-2xl font-bold">Radio Meshnet</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde magnam molestiae explicabo sequi doloribus earum vitae dignissimos corporis corrupti!</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <img src="/mobile.jpg" alt="Connector Device" className="object-cover w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 p-4 text-left">
              <h3 className="text-2xl font-bold">Dualband radio module for Freedom Phone</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet explicabo iure eius, a sapiente consequatur maxime? Quisquam, distinctio nostrum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
