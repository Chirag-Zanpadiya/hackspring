import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Service/Service.jsx";
import About from "./components/AboutUs/About.jsx";
import { Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header />
        <Outlet/>

    </>
  );
}

export default App;
