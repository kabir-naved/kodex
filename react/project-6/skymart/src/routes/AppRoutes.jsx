import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/register/Register";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import About from "../pages/about/about";
import ProtectedRoutes from "./ProtectedRoutes";



function AppRoutes() {
  
    const router = createBrowserRouter([
      {
        path: "/start",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "",
            element: <MainLayout />,
            children: [
              {
                path: "",
                element: <Home />,
              },
              {
                path: "products",
                element: <Products />,
              },
              {
                path: "about",
                element: <About />,
              },
            ],
          },
        ],
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes;
