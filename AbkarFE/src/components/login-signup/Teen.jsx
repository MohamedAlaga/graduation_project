import Wrapper from "./reusable/Wrapper";
import title from "../../assets/جاري العمل عليه.svg";
import frame from "../../assets/Vector 27.svg";
import glass from "../../assets/Hourglass done.svg";
import text from "../../assets/سيتم إضافة قسم (18 - 13) في التحديث القادم.svg";
import Green from "./reusable/Green";
import back from "../../assets/رجوع.svg";
import { useNavigate } from "react-router-dom";

function Teen() {
  const navigate = useNavigate();

  return (
    <Wrapper height="650px">
      <div className="Teen">
        <img src={title} alt="Working on it" />
        <div className="Teen__shape">
          <img src={frame} alt="frame" />
          <img src={glass} alt="glass" />
        </div>
        <img src={text} alt="text" className="text" />
        <Green onClick={() => navigate("/")}>
          <img src={back} alt="back" />
        </Green>
      </div>
    </Wrapper>
  );
}

export default Teen;
