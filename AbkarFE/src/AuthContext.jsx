/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isSessionStorageAvailable =
    typeof window !== "undefined" && window.sessionStorage;

  const storedAuth =
    isSessionStorageAvailable && sessionStorage.getItem("auth");
  const storedUserType =
    isSessionStorageAvailable && sessionStorage.getItem("userType");
  const storedToken =
    isSessionStorageAvailable && sessionStorage.getItem("token");

  const [isLoggedIn, setLoggedIn] = useState(storedAuth === "true");
  const [userType, setUserType] = useState(storedUserType);
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    if (isLoggedIn) {
      if (isSessionStorageAvailable && sessionStorage.getItem("auth")) {
        setLoggedIn(true);
        setUserType(sessionStorage.getItem("userType"));
        setToken(sessionStorage.getItem("token"));
      }
    }
  }, [isLoggedIn, isSessionStorageAvailable]);

  const login = (userType, token) => {
    setLoggedIn(true);
    setUserType(userType);
    setToken(token);

    if (isSessionStorageAvailable) {
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("userType", userType);
      sessionStorage.setItem("token", token);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUserType("user");
    setToken(null);

    if (isSessionStorageAvailable) {
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("userType");
      sessionStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userType,
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

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
