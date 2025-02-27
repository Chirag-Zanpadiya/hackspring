import React from "react";

function UserCart() {
    const cartItems = [
      { id: 1, name: "Fresh Apples", price: "$2.99/kg", quantity: 2 },
      { id: 2, name: "Organic Carrots", price: "$1.49/kg", quantity: 1 },
    ];
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-5">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white p-5 rounded-xl shadow-md">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between p-4 border-b hover:bg-gray-100 transition duration-300"
              >
                <h3 className="text-lg">{item.name}</h3>
                <p>
                  {item.quantity} x {item.price}
                </p>
              </div>
            ))}
            <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    );
  };

export default UserCart;
