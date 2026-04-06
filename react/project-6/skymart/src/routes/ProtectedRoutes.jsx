import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../context/AuthContext";

function ProtectedRoutes() {
  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    //   toast.error("Logged out")
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
