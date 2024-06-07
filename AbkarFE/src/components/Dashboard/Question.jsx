// eslint-disable-next-line react/prop-types
function Question({ num, register }) {
  return (
    <div className="question" style={{ marginBottom: "100px" }}>
      <div className="first">
        <label htmlFor={`question-${num}`}>السؤال رقم {num}</label>
        <input
          type="text"
          id={`question-${num}`}
          placeholder="أضف نص السؤال"
          {...register(`question${num}`)}
        />
      </div>
      <div className="second">
        <div>
          <label>الإجابة الصحيحة</label>
          <input
            type="text"
            placeholder="أضف الإجابة"
            {...register(`q${num}a1`)}
          />
        </div>
        <div>
          <label>الإجابة الخاطئة 1</label>
          <input
            type="text"
            placeholder="أضف الإجابة"
            {...register(`q${num}a2`)}
          />
        </div>
        <div>
          <label>الإجابة الخاطئة 2</label>
          <input
            type="text"
            placeholder="أضف الإجابة"
            {...register(`q${num}a3`)}
          />
        </div>
        <div>
          <label>الإجابة الخاطئة 3</label>
          <input
            type="text"
            placeholder="أضف الإجابة"
            {...register(`q${num}a4`)}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
