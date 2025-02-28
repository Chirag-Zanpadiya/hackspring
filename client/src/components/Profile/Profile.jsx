import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Wheat, ShoppingCart, User, Package, Home } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.auth?.userData);
  // console.log(`farmerStatus :  ${farmerStatus.userName}`);
  const farmerStatus = userData.role;
  console.log(` farmer role :  ${farmerStatus}`);

  const authFarmer = farmerStatus === "Farmer";
  console.log(authFarmer);

  return (<>
    <div className="flex    mt-20 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed h-full bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-5">{farmerStatus} Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/profile/home"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-white"}
               flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-blue-300 transition duration-300`
              }
            >
              <Home /> <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile/products"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-white"}
               flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-blue-300 transition duration-300`
              }
            >
              <Package /> <span>Products</span>
            </NavLink>
          </li>


         { authFarmer &&  <li>
            <NavLink
              to="/profile/order"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-white"}
               flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-blue-300 transition duration-300`
              }
            >
              <ShoppingCart /> <span>Orders</span>
            </NavLink>
          </li>}

          { !authFarmer &&  <li>
            <NavLink
              to="/profile/cart"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-white"}
               flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-blue-300 transition duration-300`
              }
            >
              <ShoppingCart /> <span>Cart</span>
            </NavLink>
          </li>}

          {/* {TODO: agar farmer hai toh add crop ka option duga} */}
          {authFarmer && (
            <li>
              <NavLink
                to="/profile/addcrop"
                className={({ isActive }) =>
                  `${isActive ? "text-blue-500" : "text-white"}
               flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-blue-300 transition duration-300`
                }
              >
                <Wheat /> <span>Add Crop</span>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/profile/details"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-white"}
               flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-blue-300 transition duration-300`
              }
            >
              <User /> <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64">

        <Outlet />
      </div>

      </div>

  </>

  );
};

export default Profile;
