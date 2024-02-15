import Wrapper from "./reusable/Wrapper";
import title from "../../assets/تسجيل الدخول.svg";

function LogIn() {
  return (
    <Wrapper height="500px">
      <div className="LogIn">
        <img src={title} alt="title" />
      </div>
    </Wrapper>
  );
}

export default LogIn;
