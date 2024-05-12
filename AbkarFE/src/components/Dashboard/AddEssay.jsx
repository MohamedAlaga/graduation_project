import { useState } from "react";

function AddEssay() {
  const [EName, setEName] = useState("");
  const [EContent, setEContent] = useState("");

  return (
    <div className="AddAEssay">
      <form>
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
      </form>
      <div className="btns">
        <button>حذف</button>
        <button>إلغاء</button>
      </div>
    </div>
  );
}

export default AddEssay;
