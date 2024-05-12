// eslint-disable-next-line react/prop-types
function Question({ num }) {
  return (
    <div className="question" style={{ marginBottom: "100px" }}>
      <div className="first">
        <label htmlFor={`question-${num}`}>السؤال رقم {num}</label>
        <input type="text" id={`question-${num}`} placeholder="أضف نص السؤال" />
      </div>
      <div className="second">
        <div>
          <label>الإجابة الصحيحة</label>
          <input type="text" placeholder="أضف الإجابة" />
        </div>
        <div>
          <label>الإجابة الخاطئة 1</label>
          <input type="text" placeholder="أضف الإجابة" />
        </div>
        <div>
          <label>الإجابة الخاطئة 2</label>
          <input type="text" placeholder="أضف الإجابة" />
        </div>
        <div>
          <label>الإجابة الخاطئة 3</label>
          <input type="text" placeholder="أضف الإجابة" />
        </div>
      </div>
    </div>
  );
}

export default Question;
