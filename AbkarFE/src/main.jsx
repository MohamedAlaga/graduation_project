import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { AuthProvider } from "./AuthContext.jsx";
import SettingContextProvider from "./SettingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <AuthProvider>
   <SettingContextProvider>
  <React.StrictMode>
   
      <App />
    
  </React.StrictMode>
  </SettingContextProvider>
  </AuthProvider>
  

);
