import Wrapper from "./reusable/Wrapper";
import Long from "./reusable/Long";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import Red from "./reusable/Red";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FForm() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const [focus5, setFocus5] = useState(false);
  const [focus6, setFocus6] = useState(false);

  return (
    <Wrapper height="660px">
      <div className="FForm">
        <div className="title">بياناتك</div>
        <form onSubmit={(e) => e.preventDefault}>
          <div>
            <input
              type="text"
              id="Pname"
              required
              onFocus={() => setFocus(true)}
            />
            <label
              htmlFor="Pname"
              style={focus ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              إسم الوالد
            </label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              required
              onFocus={() => setFocus2(true)}
            />
            <label
              htmlFor="name"
              style={focus2 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              إسم العبقري
            </label>
          </div>
          <div>
            <input
              type="text"
              id="age"
              required
              onFocus={() => setFocus3(true)}
            />
            <label
              htmlFor="age"
              style={focus3 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              سن العبقري
            </label>
          </div>
          <div>
            <input
              type="text"
              id="mail"
              required
              onFocus={() => setFocus4(true)}
            />
            <label
              htmlFor="mail"
              style={focus4 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              البريد الالكتروني
            </label>
          </div>
          <div>
            <input
              type="text"
              id="pass"
              required
              onFocus={() => setFocus5(true)}
            />
            <label
              htmlFor="pass"
              style={focus5 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              كلمة المرور
            </label>
          </div>
          <div>
            <input
              type="text"
              id="phone"
              required
              onFocus={() => setFocus6(true)}
            />
            <label
              htmlFor="phone"
              style={focus6 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              رقم الهاتف
            </label>
          </div>
          <div>
            <Long>إنشاء حساب جديد</Long>
          </div>
        </form>
        <div className="another">
          <button onClick={() => navigate("/")}>تسجيل الدخول</button>
          <span>لديك حساب علي عبقر ؟</span>
        </div>
        <div className="or">
          <div className="line"></div>
          <span>او الدخول باستخدام</span>
        </div>
        <div className="btns">
          <Red>
            <img src={google} alt="google" />
            جــــوجــــل
          </Red>
          <Red>
            <img src={facebook} alt="facebook" />
            فيسبوك
          </Red>
        </div>
      </div>
    </Wrapper>
  );
}

export default FForm;
