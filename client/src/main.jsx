import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Service/Service.jsx";
import About from "./components/AboutUs/About.jsx";
import Signup from "./components/Signup/Signup.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Profile from "./components/Profile/Profile.jsx";
import UserHome from "./components/Profile/UserHome.jsx";
import UserProduct from "./components/Profile/UserProduct.jsx";
import UserCart from "./components/Profile/UserCart.jsx";
import UserProfile from "./components/Profile/UserProfile.jsx";
import  Contact  from "./components/Contact/Contact.jsx";
import AddCrop from "./components/Profile/AddCrop.jsx";
import Cart from "./components/Cart/Cart.jsx";
import UserOrder from "./components/Profile/UserOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "service",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path:"cart",
        element : <Cart/>
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "home",
            element: <UserHome />,
          },
          {
            path: "products",
            element: <UserProduct />,
          },
          {
            path:"addcrop",
            element : <AddCrop/>
          },
          {
            path: "cart",
            element: <UserCart />,
          },
          {
            path: "details",
            element: <UserProfile />,
          },
          {
            path :"order",
            element : <UserOrder/>
          }

        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
