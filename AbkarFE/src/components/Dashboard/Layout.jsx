import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const LayoutStyle = {
    display: "grid",
    gridTemplateColumns: "18rem 1fr",
    gridTemplateRows: "auto 1fr",
    height: "100vh",
    direction: "rtl",
  };

  const ContainterStyle = {
    maxWidth: "120rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  };

  const MainStyle = {
    padding: "4rem 4.8rem 6.4rem",
    overflow: "scroll",
  };

  return (
    <div style={LayoutStyle}>
      <Header />
      <Sidebar />
      <main style={MainStyle}>
        <div className="container" style={ContainterStyle}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
