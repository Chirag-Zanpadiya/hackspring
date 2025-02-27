import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// store ka login ki lena padega kyu ki login ke bad value bhej ni hai
import { login as authLogin } from "../../store/authSlice.js";

// store me value bhej ne ke liye
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

// login karana ne ke liye authservice
// import authService, { AuthService } from "../../appwrite/auth";
import { Tuple } from "@reduxjs/toolkit";
import Input from "../Input/Input.jsx";
import { FaClosedCaptioning } from "react-icons/fa";

function LogIn() {
  const usedata = useSelector((state) => state.auth?.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ye apne ap mei ek event hai dono register aur handleSubmit
  // TODO: is me hame manually state management nahi karna padata hai
  // TODO: register ka use kar ke ham value le lete ai
  // TODO: main focus useform ka hai ki manually state management nahi karna padata
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  // asyns fun is liye use kar rahe hai ki ham appwrite
  // ke login mehthods ko call kar rahe hai
  // waha pe reponst ane me thoda time lagega
  // repost ane ke bad me store me vlaue dispatch karuga
  const login = async (data) => {
    setError("");
    console.log("data of login fnd", data);
    try {
      // TODO: DB me Store karna hai
      //   console.log(data);
      //   const session = await authService.login(data);
      //   // authservice me login method me data set na ho tab tak
      //   // ham wait karege
      //   // wait kar ne ke bad ham userdata le lege authservice ke getcurrentuser() methods ki help se
      //   if (session) {
      //     // hame yaha pe wait karna padega jab tak ues ka data yaha pe na mile tab tak
      //     const userData = await authService.getCurrentUser();
      //     // user ka data mil gaya toh usko hame store pe dispatch karna padega
      //     if (userData) dispatch(authLogin(userData));
      //     // TODO: yaha pe thoda navigate me mujhe errors lag raha hia
      //     // navigate("/");
      //     navigate("/allposts");
      //   }



      // TODO: demo hai aise ham store me value ko access kar sakate hai
      dispatch(authLogin(data));
      // console.log(`After the dispatch : ${usedata.password}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="flex justify-center min-h-screen mt-8 bg-[#F3F4F6] items-center w-full">
        <div className="mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border border-black/10">
          {/* logo ka div hai  */}
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[150px]">
              {/* logo hai baiscallt  */}
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <div class="flex items-center space-x-3">
                    <div class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg">
                      Farm2
                    </div>
                    <span class="text-2xl font-extrabold text-blue-500 ">
                      Table
                    </span>
                  </div>
                </span>
              </Link>
            </span>
          </div>

          {/* signin in your accout wala heading hai ye */}
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>

          {/* errors hao toh erros ko dekao varna hide kardo */}
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          {/* ye handlesubmit ek event hai jo value ko automatically pass kar dega server pe with help of the register */}
          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              {/* ye hamare inbuild input component hai */}
              {/* email ke liye */}

              {/* role select kar ne ke liye */}
              <label class="block mb-2 text-[14px] font-medium text-blue-600 "></label>
              <select
                {...register("role", { required: true })}
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Customer">Customer</option>
              </select>

              <Input
                label="Email address"
                placeholder=""
                type="email"
                // register me basically key value ki pairs ayegi

                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      // TODO: ye basically regex hai
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />

              <Input
                label="password"
                placeholder=""
                type="password"
                {...register("password", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                        value
                      ) ||
                      "Ensure Passoword have one uppercase, one lowercase, one special character and one number",
                  },
                })}
              />
              <button
                type="submit"
                className="hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SignUp
              </button>
            </div>
          </form>

          {/* ye text   below card me ayega  agar user sign in nahi hai toh signup wale pages ke le kar jayege*/}
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;

// TODO: react-hook-form me jo hamane do methods milti hai register aur handleSubmit usme basically handlesubmit ek event hai jo jo reguster ka use karke input fiield me se sar value le lega jis se hame input field ke liye state management kar ne ki jarurau nahi hai
// Haan, react-hook-form me register aur handleSubmit do important methods hain jo form handling ko easy banate hain.

// 1. register Method
// Ye method form ke input fields ko React Hook Form ke state se connect karta hai.
// Iska use karke hame manually state management (useState) nahi karna padta.
// Example:
// jsx
// Copy
// Edit
// <input {...register("name")} />
// Ye input field ki value ko internally track karega.
// 2. handleSubmit Method
// Ye ek function hai jo form ke submit hone par call hota hai.
// Iska kaam ye hai ki form me di gayi sari values ek object ke roop me collect karna.
// Example:
// jsx
// Copy
// Edit
// const onSubmit = (data) => {
//   console.log(data); // Form ka pura data yaha milega
// };

// <form onSubmit={handleSubmit(onSubmit)}>
//   <input {...register("name")} />
//   <button type="submit">Submit</button>
// </form>
// Jab user submit karega, handleSubmit onSubmit function ko call karega, jo form ka sara data ek object ke roop me dega.
// Hame har input field ke liye useState likhne ki zarurat nahi hoti.
// Key Benefits
// ✅ Automatic state management
// ✅ Simple validation handling
// ✅ Lightweight & performance optimized

// Agar tumhe aur deep understanding chahiye toh batao, main aur explain kar sakta hoon! 🚀
