import { useState } from "react";

function AddVideo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="AddAVideo">
      <form>
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
      </form>
      <div className="btns">
        <button>حذف</button>
        <button>إلغاء</button>
      </div>
    </div>
  );
}

export default AddVideo;
