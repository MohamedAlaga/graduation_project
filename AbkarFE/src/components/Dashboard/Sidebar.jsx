import edit from "./assets/tabler_edit.svg";
import add from "./assets/basil_add-outline.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const StyledSidebar = {
    backgroundColor: "#fff6cb",
    gridRow: "1 / -1",
    display: "flex",
    flexDirection: "column",
    gap: "3.2rem",
  };

  return (
    <div style={StyledSidebar} className="Dashboard__Sidebar">
      <div className="Dashboard__Sidebar__logo">التحكم في عبقر</div>
      <div className="Dashboard__Sidebar__video">
        <div>الفيديوهات</div>
        <ul>
          <li>
            <NavLink to="videos" style={{ padding: "12px 25px 12px 101px" }}>
              <img src={edit} alt="edit" />
              <span>تعديل الفيديوهات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="addVideo" style={{ padding: "12px 25px 12px 141px" }}>
              <img src={add} alt="add" />
              <span>إضافة فيديو</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Dashboard__Sidebar__essay">
        <div>المقالات</div>
        <ul>
          <li>
            <NavLink to="essays" style={{ padding: "12px 25px 12px 120px" }}>
              <img src={edit} alt="edit" />
              <span>تعديل المقالات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="addEssay" style={{ padding: "12px 25px 12px 144px" }}>
              <img src={add} alt="add" />
              <span>إضافة مقال</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Dashboard__Sidebar__test">
        <div>الإختبارات</div>
        <ul>
          <li>
            <NavLink to="tests" style={{ padding: "12px 25px 12px 112px" }}>
              <img src={edit} alt="edit" />
              <span>تعديل الإختبارات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="addTest" style={{ padding: "12px 25px 12px 139px" }}>
              <img src={add} alt="add" />
              <span>إضافة إختبار</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
