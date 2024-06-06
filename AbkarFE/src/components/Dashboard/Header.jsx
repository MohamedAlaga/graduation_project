import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const StyledHeader = {
  backgroundColor: "#FFD200",
  height: "62px",
  display: "flex",
  gap: "2.4rem",
  alignItems: "center",
  justifyContent: "space-between",
};

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth;

  const [title, setTitle] = useState("تعديل الفيديوهات");

  useEffect(() => {
    const pathname = location.pathname;

    switch (pathname) {
      case "/videos":
        setTitle("تعديل الفيديوهات");
        break;
      case "/addVideo":
        setTitle("إضافة فيديو");
        break;
      case "/essays":
        setTitle("تعديل المقالات");
        break;
      case "/addEssay":
        setTitle("إضافة مقال");
        break;
      case "/tests":
        setTitle("تعديل الإختبارات");
        break;
      case "/addTest":
        setTitle("إضافة إختبار");
    }
  }, [location]);

  const handleLogOut = () => {
    navigate("/");
    logout();
  };

  return (
    <header style={StyledHeader} className="Dashboard__header">
      <div>{title}</div>
      <button onClick={() => handleLogOut()}>تسجيل الخروج</button>
    </header>
  );
}

export default Header;
