import { useState } from "react";
import Question from "./Question";

function AddTest() {
  const [testName, setTestName] = useState("");

  return (
    <div className="AddATest">
      <form>
        <div style={{ marginBottom: "100px" }}>
          <label htmlFor="title">عنوان الإختبار </label>
          <input
            type="text"
            id="title"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            placeholder="أضف عنوان الاختبار"
          />
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <Question key={index} num={index + 1} />
        ))}
      </form>
      <div className="btns">
        <button>حذف</button>
        <button>إلغاء</button>
      </div>
    </div>
  );
}

export default AddTest;
