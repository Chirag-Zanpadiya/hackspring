import React from 'react'

function UserHome() {
  return (
    <div>
       <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {/* Orders */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Your Orders</h3>
            <p className="text-gray-600">Manage and track your orders.</p>
          </div>

          {/* Cart */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Shopping Cart</h3>
            <p className="text-gray-600">View items in your cart.</p>
          </div>

          {/* Profile */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Profile</h3>
            <p className="text-gray-600">Edit your account details.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHome
