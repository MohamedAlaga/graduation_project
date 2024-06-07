/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import edit from "./assets/lucide_edit.svg";
import dlt from "./assets/material-symbols_delete-outline.svg";
import { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";
import x from "./assets/teenyicons_x-outline.svg";

function Table({ data }) {
  const location = useLocation();

  const [title, setTitle] = useState("الفيديو");

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
  const [editVideo, setEditVideo] = useState(false);
  const [editEssay, setEditEssay] = useState(false);
  const [editTest, setEditTest] = useState(false);

  const handleDelete = () => {
    setDel(true);
  };

  const handleEdit = () => {
    switch (title) {
      case "الفيديو":
        setEditVideo(true);
        break;
      case "المقال":
        setEditEssay(true);
        break;
      case "الإختبار":
        setEditTest(true);
        break;
    }
  };

  const handleCancel = () => {
    setDel(false);
    setEditVideo(false);
    setEditEssay(false);
    setEditTest(false);
  };

  const [name, setName] = useState("مثال");
  const [description, setDescription] = useState("مثال");
  const [link, setLink] = useState("مثال");

  const [EName, setEName] = useState("مثال");
  const [EContent, setEContent] = useState("مثال");

  const [testName, setTestName] = useState("مثال");

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
          {data.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.title}</td>
              <td>{ele.description}</td>
              <td>
                <button onClick={handleEdit}>
                  <img src={edit} alt="edit" />
                </button>
                <button onClick={handleDelete}>
                  <img src={dlt} alt="delete" />
                </button>
                <span></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {del && <DeleteItem title={title} cancel={() => handleCancel()} />}
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
              <form>
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
              </form>
              <div className="btns">
                <button>حذف</button>
                <button onClick={() => handleCancel()}>إلغاء</button>
              </div>
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
              <form>
                <div>
                  <label htmlFor="title">عنوان المقال</label>
                  <input
                    type="text"
                    id="title"
                    value={EName}
                    onChange={(e) => setEName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">نص المقال </label>
                  <input
                    type="text"
                    id="description"
                    value={EContent}
                    onChange={(e) => setEContent(e.target.value)}
                  />
                </div>
              </form>
              <div className="btns">
                <button>حذف</button>
                <button onClick={() => handleCancel()}>إلغاء</button>
              </div>
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
              <form>
                <div>
                  <label htmlFor="title">عنوان الإختبار</label>
                  <input
                    type="text"
                    id="title"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                  />
                </div>
              </form>
              <div className="btns">
                <button>حذف</button>
                <button onClick={() => handleCancel()}>إلغاء</button>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Table;
