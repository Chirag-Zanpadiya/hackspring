import { useState } from "react";

const categories = [
  {
    name: "Fruits",
    items: [
      { name: "Apple", image: "", desc: "Fresh and juicy apples" },
      { name: "Banana", image: "", desc: "Rich in potassium" },
      { name: "Grapes", image: "", desc: "Sweet and seedless" },
    ],
  },
  {
    name: "Vegetables",
    items: [
      { name: "Carrot", image: "", desc: "Good for eyesight" },
      { name: "Spinach", image: "", desc: "Rich in iron" },
      { name: "Tomato", image: "", desc: "Perfect for salads" },
    ],
  },
  {
    name: "Grains",
    items: [
      { name: "Rice", image: "", desc: "Staple food" },
      { name: "Wheat", image: "", desc: "Used for making flour" },
      { name: "Oats", image: "", desc: "Healthy breakfast option" },
    ],
  },
];

export default function Cart() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-5 max-w-4xl mx-auto">
      {/* Upper Search Bar */}
      <div className="w-full mb-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      
      {/* Top Search Bar */}
      <div className="w-full mb-5">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      
      {/* Categories */}
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.items
              .filter((item) => item.name.toLowerCase().includes(search))
              .map((item) => (
                <div
                  key={item.name}
                  className="border p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:border-blue-500 hover:shadow-xl"
                >
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
