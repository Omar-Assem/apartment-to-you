import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Product from "./Pages/Product/Product.jsx";
import Login from "./(Auth)/Login.jsx";
import Register from "./(Auth)/Register.jsx";
import LayOut from "./LayOut/LayOut";

import Home from "./Pages/HOME/home.jsx";
import WishList from "./Pages/WishList/WishList.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Error from "./Pages/Error/Error.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالملي ثانية
      
    });
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/iteminfo/:id", element: <Product /> },
        { path: "/WishList", element: <WishList /> },
        { path: "/profile", element: <Profile /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
