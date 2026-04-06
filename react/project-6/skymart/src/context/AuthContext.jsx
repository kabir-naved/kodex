import { createContext, useState } from "react";

export let Auth = createContext();

export let AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem("reg users")) || []);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Auth.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
