import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ProtectedRoutes({ children, role }) {
  const { isLoggedIn, userType } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || role != userType) navigate("/");
  }, [navigate, isLoggedIn, role, userType]);

  return <div>{children}</div>;
}

export default ProtectedRoutes;
