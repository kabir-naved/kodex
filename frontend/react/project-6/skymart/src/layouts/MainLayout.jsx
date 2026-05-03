import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <div className="bg-[#0d0d0d] text-white">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
