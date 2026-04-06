import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function AuthProtectedRoute() {
  const { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to="/start" />;
  }

  return <Outlet />;
}

export default AuthProtectedRoute;
