import { useLocation } from "react-router-dom";
import edit from "./assets/lucide_edit.svg";
import dlt from "./assets/material-symbols_delete-outline.svg";
import { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";

function Table() {
  const location = useLocation();

  const [title, setTitle] = useState("");

  useEffect(() => {
    const pathname = location.pathname;

    switch (pathname) {
      case "/videos":
        setTitle("الفيديو");
        break;
      case "/essays":
        setTitle("المقال");
        break;
      case "/tests":
        setTitle("الإختبار");
        break;
    }
  }, [location]);

  const [del, setDel] = useState(false);

  const handleDelete = () => {
    setDel(true);
  };

  const handleCancel = () => {
    setDel(false);
    console.log("haha");
  };

  return (
    <>
      <table className="MyTable">
        <colgroup>
          <col style={{ width: "40%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>عنوان {title}</th>
            <th>رابط {title}</th>
            <th>تعديل</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>مثال</td>
            <td>مثال</td>
            <td>
              <button>
                <img src={edit} alt="edit" />
              </button>
              <button onClick={handleDelete}>
                <img src={dlt} alt="delete" />
              </button>
              <span></span>
            </td>
          </tr>
        </tbody>
      </table>
      {del && <DeleteItem title={title} cancel={handleCancel} />}
    </>
  );
}

export default Table;
