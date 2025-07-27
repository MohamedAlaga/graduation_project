import Wrapper from "./reusable/Wrapper";
import Long from "./reusable/Long";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import Red from "./reusable/Red";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpUser } from "./services/SignUp";

function FForm() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const [focus5, setFocus5] = useState(false);
  const [focus6, setFocus6] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [father, setFather] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await SignUpUser(name, password, mail, phone, father, age);
    if (result) {
      navigate("/");
    } else {
      alert("حدث خطأ ما");
    }
  };

  return (
    <Wrapper height="690px">
      <div className="FForm">
        <div className="title">بياناتك</div>
        <form onSubmit={(e) => e.preventDefault}>
          <div>
            <input
              type="text"
              id="Pname"
              required
              onFocus={() => setFocus(true)}
              value={father}
              onChange={(e) => setFather(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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
              type="password"
              id="pass"
              required
              onFocus={() => setFocus5(true)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              htmlFor="phone"
              style={focus6 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              رقم الهاتف
            </label>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Long onClick={handleSubmit}>إنشاء حساب جديد</Long>
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
        <div className="btns social">
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
