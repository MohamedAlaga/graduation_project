/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const isSessionStorageAvailable =
    typeof window !== "undefined" && window.sessionStorage;

  const storedAuth = isLocalStorageAvailable
    ? localStorage.getItem("auth")
    : null;

  const storedToken = isLocalStorageAvailable
    ? localStorage.getItem("token")
    : null;

  const [isLoggedIn, setLoggedIn] = useState(storedAuth === "true");
  const [token, setToken] = useState(storedToken);

  const login = (token) => {
    setLoggedIn(true);
    setToken(token);

    if (isLocalStorageAvailable) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("token", token);
    } else if (isSessionStorageAvailable) {
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("token", token);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setToken(null);

    if (isLocalStorageAvailable) {
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    }

    if (isSessionStorageAvailable) {
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
