import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { StoreVideo } from "./services/StoreVideo";

function AddVideo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await StoreVideo(token, link, name, description);
  };

  return (
    <div className="AddAVideo">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">عنوان الفيديو</label>
          <input
            type="text"
            id="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="أضف عنوان الفيديو"
          />
        </div>
        <div>
          <label htmlFor="description">وصف الفيديو </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="أضف وصف الفيديو"
          />
        </div>
        <div>
          <label htmlFor="link">رابط الفيديو</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="أضف رابط الفيديو"
          />
        </div>
        <div className="btns">
          <button type="cancel">إلغاء</button>
          <button type="submit">إضافة</button>
        </div>
      </form>
    </div>
  );
}

export default AddVideo;
