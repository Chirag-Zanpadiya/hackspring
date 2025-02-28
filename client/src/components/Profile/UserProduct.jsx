import React from "react";
import { Link } from "react-router-dom";
function UserProduct() {
  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: "$2.99/kg",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Organic Carrots",
      price: "$1.49/kg",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Milk 1L",
      price: "$0.99",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="p-10 justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">
        Welcome to Your Home Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        Find fresh farm products at the best price!
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <Link
              to="/profile/cart"
              className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProduct;
