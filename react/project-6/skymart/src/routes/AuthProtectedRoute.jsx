import React from "react";

function AuthProtectedRoute() {

const {loggedInUser} =useContext(Auth);
  
      if(loggedInUser) {
        toast.success("Unauthorized Access")  
        return <Navigate  to={'/start'}/>
      }
  
    return (
     <Outlet />
    )
}

export default AuthProtectedRoute;
