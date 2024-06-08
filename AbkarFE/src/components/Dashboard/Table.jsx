/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import edit from "./assets/lucide_edit.svg";
import dlt from "./assets/material-symbols_delete-outline.svg";
import { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";
import x from "./assets/teenyicons_x-outline.svg";
import { UpdateVid } from "./services/UpdateVid";
import { useAuth } from "../../AuthContext";
import { UpdateTest } from "./services/UpdateTest";

function Table({ data, handleRender }) {
  const location = useLocation();
  const { token } = useAuth();

  const [title, setTitle] = useState("الفيديو");
  const [specialCell, setSpecialCell] = useState("رابط الفيديو");

  useEffect(() => {
    const pathname = location.pathname;

    switch (pathname) {
      case "/videos":
        setTitle("الفيديو");
        setSpecialCell("رابط الفيديو");
        break;
      case "/essays":
        setTitle("المقال");
        setSpecialCell("نص المقال");
        break;
      case "/tests":
        setTitle("الإختبار");
        setSpecialCell("عدد الأسئلة");
        break;
    }
  }, [location]);

  const [del, setDel] = useState(false);
  const [editVideo, setEditVideo] = useState(false);
  const [editEssay, setEditEssay] = useState(false);
  const [editTest, setEditTest] = useState(false);

  const handleDelete = (id) => {
    setDel(true);
    setId(id);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState("");

  const handleEdit = (name, description, link, id) => {
    switch (title) {
      case "الفيديو":
      case "المقال":
        setEditVideo(true);
        setName(name);
        setDescription(description);
        setLink(link);
        setId(id);
        break;
      case "الإختبار":
        setEditTest(true);
        setName(name);
        setId(id);
        break;
    }
  };

  const handleCancel = () => {
    setDel(false);
    setEditVideo(false);
    setEditEssay(false);
    setEditTest(false);
  };

  const handleEditVid = async (e) => {
    e.preventDefault();
    await UpdateVid(token, link, name, description, id);
    handleRender(id);
    handleCancel();
  };

  const handleEditTest = async (e) => {
    e.preventDefault();
    await UpdateTest(token, name, id);
    handleRender(id);
    handleCancel();
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
            <th>{specialCell}</th>
            <th>تعديل</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.title}</td>
              {title === "الفيديو" && <td>{ele.url}</td>}
              {title === "المقال" && <td>{ele.description}</td>}
              {title === "الإختبار" && <td>{ele.questions_count}</td>}
              <td>
                <button
                  onClick={() =>
                    handleEdit(ele.title, ele.description, ele.url, ele.id)
                  }
                >
                  <img src={edit} alt="edit" />
                </button>
                <button onClick={() => handleDelete(ele.id)}>
                  <img src={dlt} alt="delete" />
                </button>
                <span></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {del && (
        <DeleteItem
          title={title}
          cancel={() => handleCancel()}
          id={id}
          handleRender={handleRender}
        />
      )}
      {editVideo && (
        <div className="editForTable">
          <div className="editForTable__window">
            <div className="editForTable__window__header">
              <div>تعديل {title}</div>
              <button onClick={() => handleCancel()}>
                <img src={x} alt="Close" />
              </button>
            </div>
            <div className="editForTable__window__body">
              <form onSubmit={handleEditVid}>
                <div>
                  <label htmlFor="title">عنوان الفيديو</label>
                  <input
                    type="text"
                    id="title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">وصف الفيديو </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="link">رابط الفيديو</label>
                  <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="btns">
                  <button type="cancel" onClick={handleCancel}>
                    إلغاء
                  </button>
                  <button type="submit">إضافة</button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      )}

      {editEssay && (
        <div className="editForTableEssay">
          <div className="editForTableEssay__window">
            <div className="editForTableEssay__window__header">
              <div>تعديل {title}</div>
              <button onClick={() => handleCancel()}>
                <img src={x} alt="Close" />
              </button>
            </div>
            <div className="editForTableEssay__window__body">
              <form onSubmit={handleEditVid}>
                <div>
                  <label htmlFor="title">عنوان المقال</label>
                  <input
                    type="text"
                    id="title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">نص المقال </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="btns">
                  <button type="cancel" onClick={handleCancel}>
                    إلغاء
                  </button>
                  <button type="submit">إضافة</button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      )}

      {editTest && (
        <div className="editForTableTest">
          <div className="editForTableTest__window">
            <div className="editForTableTest__window__header">
              <div>تعديل {title}</div>
              <button onClick={() => handleCancel()}>
                <img src={x} alt="Close" />
              </button>
            </div>
            <div className="editForTableTest__window__body">
              <form onSubmit={handleEditTest}>
                <div>
                  <label htmlFor="title">عنوان الإختبار</label>
                  <input
                    type="text"
                    id="title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="btns">
                  <button type="cancel" onClick={handleCancel}>
                    إلغاء
                  </button>
                  <button type="submit">إضافة</button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Table;
