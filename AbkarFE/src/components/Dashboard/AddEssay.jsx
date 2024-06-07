import { useState } from "react";
import { StoreVideo } from "./services/StoreVideo";
import { useAuth } from "../../AuthContext";

function AddEssay() {
  const [EName, setEName] = useState("");
  const [EContent, setEContent] = useState("");

  const { token } = useAuth();

  const EmptyAll = () => {
    setEName("");
    setEContent("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await StoreVideo(token, "", EName, EContent);
    EmptyAll();
  };

  return (
    <div className="AddAEssay">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">عنوان المقال</label>
          <input
            type="text"
            id="title"
            value={EName}
            onChange={(e) => setEName(e.target.value)}
            placeholder="أضف عنوان المقال"
          />
        </div>
        <div>
          <label htmlFor="description">نص المقال </label>
          <textarea
            type="text"
            id="description"
            value={EContent}
            onChange={(e) => setEContent(e.target.value)}
            placeholder="أضف نص المقال"
          />
        </div>
        <div className="btns">
          <button type="cancel" onClick={() => EmptyAll()}>
            إلغاء
          </button>
          <button type="submit">إضافة</button>
        </div>
      </form>
    </div>
  );
}

export default AddEssay;
