import React, { act } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth?.status);

  console.log(authStatus);
  
  const navigate = useNavigate();

  const navItems = [
    { name: "Login", slug: "/login" , active : !authStatus },
    { name: "SignUp", slug: "/signup" ,active : !authStatus },
 
  ];

  return (
    <div className="relative">
      <nav className="bg-white dark:bg-gray-900  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-16 h-16     rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg">
              Farm2 
              </div>
              <span className="text-2xl font-semibold text-blue-500">Table</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex md:order-2 space-x-2 rtl:space-x-reverse">
            <ul className="flex gap-2">
              {/* TODO: agar login nahi hai toh mei use logout wala btn dekhaoga */}
              {navItems.map((item) => item.active ? (
                <li key={item.slug}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null ) }
            </ul>

              {/* TODO: agar koi login hai toh mei use cart and profile wala btn dekhaoga */}
            {authStatus && (
              <div className="flex justify-between items-center gap-8">

              <button onClick={()=> navigate('/cart') } className="relative flex justify-center items-center cursor-pointer">
                <img   className="w-[34px] h-[34px] " src="https://img.icons8.com/?size=100&id=8chNl15hy6jY&format=png&color=000000" alt="cartimage" />
                </button>
              <button onClick={()=> navigate('/profile') } className="relative flex justify-center items-center cursor-pointer">
                <img   className="w-[32px] h-[32px] " src="/public/user_profile.png" alt="cartimage" />
                </button>
              </div>
            )}

            {/* TODO:mobile screan ke liya baki hai  Mobile Menu Button */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
              text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
              focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
              dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
            rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
            md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-blue-500 font-bold" : "text-blue-300  hover:text-gray-400"
                    }`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-blue-500 font-bold" : "text-blue-300  hover:text-gray-400"
                    }`
                  }
                  aria-current="page"
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-blue-500 font-bold" : "text-blue-300 hover:text-gray-400"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-blue-500 font-bold" : "text-blue-300  hover:text-gray-400"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Header;
