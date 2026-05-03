import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import HomePage from "../../features/dashboard/ui/page/HomePage";

function AppRoutes() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
        ],
      },
    ]);
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes;
