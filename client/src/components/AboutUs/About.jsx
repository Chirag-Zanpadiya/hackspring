import React from "react";
import { FaHandHoldingUsd, FaUsers, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen  flex justify-center items-center py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-black mb-4">Empowering Farmers, Connecting Consumers</h2>
        <p className="text-gray-700 text-lg mb-8">
          Our platform eliminates middlemen, ensuring farmers get fair prices while customers receive fresh, quality crops directly from the source.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Farmers Benefit */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <FaHandHoldingUsd className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">For Farmers</h3>
            <p className="text-gray-700 mt-2">Sell crops directly, set your own prices, and eliminate commission cuts.</p>
          </div>

          {/* Customers Benefit */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <FaUsers className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">For Consumers</h3>
            <p className="text-gray-700 mt-2">Buy fresh farm products directly from farmers at fair prices.</p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <FaLeaf className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">Our Vision</h3>
            <p className="text-gray-700 mt-2">Creating a transparent, commission-free marketplace for fair trade.</p>
          </div>
        </div>

        {/* Call to Action */}
        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default About;
