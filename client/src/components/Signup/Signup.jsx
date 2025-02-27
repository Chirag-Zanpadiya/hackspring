import React, { useState } from "react";
// import authService from "../../appwrite/auth"; // TODO:DB
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../Input/Input.jsx";

function Signup() {
  const userdata = useSelector((state) => state.auth?.userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  //   TODO: DB walo ka kam hai ye
  const createAcc = async (data) => {
    // console.log(data.role)
    console.log(data);
    setError("");
    try {
      //  TODO: dB ka create acc wala const session = await authService.createAccount(data);
      //   if (session) {
      //     // TODO: DB se mango ki current user lao const userData = await authService.getCurrentUser();
      //     // TODO: jab DB userdata mil jaye toh store me pass kardo
      //     if (userData) {
      //       dispatch(login(userData));
      //     }
      //     // TODO: agar login ho gaya toh direct cart me le jaoga
      //     navigate("/cart");
      //   }
      //   TODO: me idhar chahata hu ki user login hone ke bad turant card wala component ke chala jaye
      //       
      // 
      // 
        //  dispatch(login(data));
      //    console.log(` UserData : ${userdata.userName}`);
      //    navigate("/cart");
    } 
    
    catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center min-h-screen mt-14 bg-[#F3F4F6] justify-center">
        <div className="mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border border-black/10">
          {/* logo ke liye hai */}
          <div className="mb-2 flex items-center justify-center">
            <span className="inline-block w-full max-w-[150px]">
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="sefl-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <div class="flex items-center  space-x-3">
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

          <h2 className="text-center text-2xl font-bold mb-4 leading-tight">
            Sign up to create account
          </h2>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <form onSubmit={handleSubmit(createAcc)}>
            <div className="space-y-5">
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
                label="User Name"
                placeholder=""
                type="text"
                {...register("userName", {
                  required: true,
                })}
              />

              <Input
                label="Email address"
                type="email"
                placeholder=""
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />

              <Input
                label="Password"
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

              <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                  to="/login"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
