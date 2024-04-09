import Wrapper from "./reusable/Wrapper";
import sad from "../../assets/sad.svg";
import Green from "./reusable/Green";
import { useState } from "react";
// import { ForgetPass } from "./services/ForgetPass";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const navigate = useNavigate();

  const [focus, setFocus] = useState(false);
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const result = await ForgetPass(mail);
    // if (result) {
    navigate("/reassign-password");
    // } else {
    //   console.log("error");
    // }
  };

  return (
    <Wrapper height="580px">
      <div className="Forgot">
        <div className="title">نسيت كلمة المرور</div>
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="223"
            viewBox="0 0 244 223"
            fill="none"
          >
            <path
              d="M240.429 161.048C243.82 146.827 241.125 137.137 237.966 130.821C231.107 117.102 222.627 107.982 222.627 98.3374C222.627 85.7051 233.906 64.0496 230.297 47.808C224.215 20.4378 210.897 18.0318 196.46 14.8737C173.187 9.78257 150.802 21.0127 137.517 13.4981C121.673 4.53621 97.3543 -5.91269 79.1304 11.0616C67.0753 22.2899 64.2426 42.6495 47.0986 47.6499C36.2709 50.808 21.8006 58.006 13.2616 71.7193C-3.50891 98.6518 -1.79471 133.271 20.0578 147.965C46.2254 165.56 45.7458 158.314 47.0986 181.774C48.1894 200.691 56.9568 207.607 63.7241 212.119C74.0274 218.988 94.3163 224.723 111.655 214.877C130.38 204.245 136.456 209.164 160.789 209.164C185.122 209.164 193.599 208.462 207.258 202.103C218.305 196.961 234.218 187.099 240.429 161.048Z"
              fill="#00DCEA"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <img src={sad} alt="sad face" />
        </div>
        <p>ادخل بريدك الالكتروني الذي سجلت به في المنصة</p>
        <p>سوف نرسل لك رسالة لإعادة تعين كلمة مرورك</p>
        <form>
          <input
            type="text"
            id="mail"
            onFocus={() => setFocus(true)}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <label
            htmlFor="mail"
            style={focus ? { bottom: "120px", fontSize: "14px" } : {}}
          >
            البريد الالكتروني
          </label>
          <Green onClick={handleSubmit}>الـتـالــي</Green>
        </form>
      </div>
    </Wrapper>
  );
}

export default Forgot;
