/* eslint-disable react/prop-types */
import Wrapper from "./reusable/Wrapper";
import boy from "../../assets/boy.svg";
import Long from "./reusable/Long";
import Red from "./reusable/Red";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import PreLoader from "./PreLoader";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogInUser } from "./services/LogIn";

import { useAuth } from "../../AuthContext";

function LogIn({ first, handleFirst }) {
  const { login } = useAuth();

  const [loading, setLoading] = useState(true);
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      handleFirst(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isOK, data } = await LogInUser(mail, pass);
    if (isOK) {
      login(data.role, data.access_token);
      if (data.role == "user") navigate("/pageone");
      else if (data.role == "admin") navigate("/videos");
    } else {
      console.log("error");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/google";
  };

  return loading && first ? (
    <PreLoader />
  ) : (
    <Wrapper height="690px">
      <div className="LogIn">
        <div className="title mb-3 ">تسجيل الدخول</div>
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="205"
            viewBox="0 0 244 205"
            fill="none"
          >
            <path
              d="M54.5596 201.878C69.5661 201.878 85.805 191.279 104.342 189.31C120.687 187.573 135.687 191.935 144.45 194.483L144.842 194.597C173.655 202.971 188.503 204.242 202.627 201.878C219.84 198.998 239.669 180.83 241.645 167.721C244.752 147.103 225.031 134.631 231.208 123.876C241.066 106.712 244.119 70.8624 227.098 58.8231C210.821 47.3102 195.733 55.8331 182.847 44.1342C171.915 34.2092 168.739 19.1233 155.241 8.80136C145.292 1.19308 127.161 -0.455704 109.586 6.02237C97.3423 10.5357 81.7966 23.4903 72.2686 26.2693C59.7203 29.9292 49.4645 24.6835 32.7823 29.0483C21.0497 32.118 8.15584 39.9789 3.80151 52.0741C-3.34451 71.924 12.4312 92.1164 22.0629 107.257C28.409 117.233 24.3572 134.561 16.9022 146.163C9.52135 160.414 8.17458 172.617 14.3953 184.545C21.3812 197.939 39.3256 201.878 54.5596 201.878Z"
              fill="#FFD200"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <img src={boy} alt="boy" />
        </div>
        <form>
          <div>
            <input
              type="email"
              id="mail"
              onFocus={() => setFocus(true)}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label
              htmlFor="mail"
              style={focus ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              البريد الالكتروني
            </label>
          </div>
          <div>
            <input
              type="password"
              id="pass"
              onFocus={() => setFocus2(true)}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <label
              htmlFor="pass"
              style={focus2 ? { bottom: "45px", fontSize: "14px" } : {}}
            >
              كلمة المرور
            </label>
          </div>
        </form>
        <div className="password">
          <div className="forget">
            <button onClick={() => navigate("/password")}>
              نسيت كلمة المرور؟
            </button>
          </div>
          <Long onClick={handleSubmit}>تسجيل الدخول</Long>
        </div>
        <div className="another">
          <button onClick={() => navigate("/form")}>إنشاء حساب جديد</button>
          <span>ليس لديك حساب ؟ </span>
        </div>
        <div className="or">
          <div className="line"></div>
          <span>او الدخول باستخدام</span>
        </div>
        <div className="btns social">
          <Red>
            <img src={facebook} alt="facebook" />
            فيسبوك
          </Red>
          <button onClick={handleGoogleLogin} className="RedBtn">
            <img src={google} alt="google" />
            جــــوجــــل
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default LogIn;
