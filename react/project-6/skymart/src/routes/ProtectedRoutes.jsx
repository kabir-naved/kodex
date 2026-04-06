import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import toast from "react-hot-toast";

function ProtectedRoutes() {

    const {loggedInUser} =useContext(Auth);

    if(!loggedInUser) {
      toast.error("Unauthorized Access")  
      return <Navigate  to={'/'}/>
    }

  return (
   <Outlet />
  )
}

export default ProtectedRoutes;
