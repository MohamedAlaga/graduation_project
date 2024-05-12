import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StyledHeader = {
  backgroundColor: "#FFD200",
  height: "62px",
  display: "flex",
  gap: "2.4rem",
  alignItems: "center",
  justifyContent: "flex-start",
};

function Header() {
  const location = useLocation();

  const [title, setTitle] = useState("");

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

  return (
    <header style={StyledHeader} className="Dashboard__header">
      <div>{title}</div>
    </header>
  );
}

export default Header;
