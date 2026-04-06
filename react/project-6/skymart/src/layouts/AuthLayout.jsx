import { Outlet } from "react-router-dom";
import Greet from "../components/Greet";


function AuthLayout() {
  return (
    <>
      <div className="flex min-h-screen bg-black text-white">
        <Greet />
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
