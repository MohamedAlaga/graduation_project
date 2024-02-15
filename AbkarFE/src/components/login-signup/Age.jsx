import Wrapper from "./reusable/Wrapper";
import howOld from "../../assets/howOld.png";
import Green from "./reusable/Green";
import Red from "./reusable/Red";
import young from "../../assets/6 - 12.png";
import old from "../../assets/13 - 18.png";
import { useNavigate } from "react-router-dom";

function Age() {
  const navigate = useNavigate();

  return (
    <Wrapper height="500px">
      <div className="Age">
        <div className="Age__top">
          <img src={howOld} alt="How old are you?" />
        </div>
        <div className="Age__bottom">
          <Green onClick={() => navigate("/login")}>
            <img src={young} alt="child" />
          </Green>
          <Red onClick={() => navigate("/13-18")}>
            <img src={old} alt="teenager" />
          </Red>
        </div>
      </div>
    </Wrapper>
  );
}

export default Age;
