import { useNavigate } from "react-router-dom";
import Wrapper from "./reusable/Wrapper";

function Welcome() {
  const navigate = useNavigate();
  return (
    <Wrapper height="670px">
      <div className="Welcome">
        <div className="title">أهلا بك في عبقر </div>
        <div style={{ padding: "0 48px" }}>
          <p>
            منصة عبقر هي منصة تعليم برمجة للأطفال و الشباب بـطـريقـة ترفيهية
            وأساليب حديثة✨{" "}
          </p>
          <p>تنقسم المنصة الي قسمين أساسيين . </p>
          <p>
            القسم الأول : وهو مخصص لفئة (6 - 12) ويعد تمهيد للعبقري ليتعرف علي
            تاريخ الكمبيوتر منذ بدايته وصولاً الي البرمجة وتطورها ، في شكل كورس
            ترفيهي ومنظم .
          </p>
          <p>
            بنهاية هذ القسم يكون قد عرف العبقري تاريخ البرمجة وتعلم اساسيات
            البرمجة بشكل متقن ، دون تعقيد او ملل 🤩 😎
          </p>
          <p>القسم الثاني : وهو مخصص لفئة (13 - 18)</p>
          <p>
            ويعد البداية لتعليم البرمجة المتطورة للعبقري بعدما تم تأسيسه في
            المستوي الأول .
          </p>
        </div>
        <button className="GreenBtn" onClick={() => navigate("/age")}>
          الـتـالــي
        </button>
      </div>
    </Wrapper>
  );
}

export default Welcome;
