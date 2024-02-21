import Wrapper from "./reusable/Wrapper";
import Long from "./reusable/Long";
import { useNavigate } from "react-router-dom";

function Parents() {
  const navigate = useNavigate();

  return (
    <Wrapper height="500px">
      <div className="Parents">
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="384"
            height="295"
            viewBox="0 0 384 295"
            fill="none"
          >
            <path
              d="M34.7722 81.6821C31.6345 101.216 34.7722 133.234 34.7722 137.92C34.7722 155.1 21.0631 161.416 12.9701 173.05C1.71831 189.224 -1.88398 200.757 6.93459 221.53C23.2355 259.927 63.2898 276.134 89.0913 264.333C121.021 246.705 148.732 271.806 167.988 281.958C193.884 297.577 226.324 296.899 256.665 278.181C277.498 265.329 280.435 235.378 310.784 235.378C332.227 235.378 355.786 232.502 368.163 213.976C392.471 177.59 382.508 108.226 355.69 84.3069C339.254 69.6465 313.022 67.941 302.589 43.3919C294.201 23.6531 279.379 9.04308 259.555 4.99473C225.649 -1.9293 209.868 3.60954 184.736 16.9104C168.177 25.6742 153.79 41.2669 134.532 30.9718C110.875 20.7793 89.627 18.4365 69.8287 27.027C52.4428 35.6171 38.1143 60.8766 34.7722 81.6821Z"
              fill="#FFD200"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p>اعطي الهاتف لوالديك</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Long path="/welcome">انشاء حساب جديد</Long>
          <div className="another" style={{ margin: "20px 0 0 0" }}>
            <button onClick={() => navigate("/login")}>
              {" "}
              تــــســــــجـــيــــل الـــدخــــول
            </button>
            <span>لديك حساب ؟ </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Parents;
