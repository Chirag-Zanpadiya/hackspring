import React from "react";
import { FaHandsHelping, FaShoppingCart, FaComments } from "react-icons/fa";

const servicesData = [
  {
    title: "Direct Selling for Farmers",
    description: "Farmers can list and sell their products directly without any middlemen.",
    icon: <FaHandsHelping className="text-green-500 text-5xl mb-4" />,
  },
  {
    title: "Secure & Transparent Deals",
    description: "Buyers and sellers can negotiate and make secure transactions with fair pricing.",
    icon: <FaShoppingCart className="text-yellow-500 text-5xl mb-4" />,
  },
  {
    title: "Real-time Chat & Negotiation",
    description: "Farmers and customers can communicate directly to finalize the deal.",
    icon: <FaComments className="text-blue-500 text-5xl mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We help farmers connect directly with buyers, ensuring fair pricing and transparency.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
