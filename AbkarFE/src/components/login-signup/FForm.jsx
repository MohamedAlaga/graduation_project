import Wrapper from "./reusable/Wrapper";
import Long from "./reusable/Long";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import Red from "./reusable/Red";

function FForm() {
  return (
    <Wrapper height="500px">
      <form>
        <input type="text" required placeholder="إسم الوالد" />
        <input type="text" required placeholder="إسم العبقري" />
        <input type="text" required placeholder="سن العبقري" />
        <input type="text" required placeholder="البريد الالكتروني" />
        <input type="text" required placeholder="كلمة المرور" />
        <input type="text" required placeholder="رقم الهاتف" />
        <Long>إنشاء حساب جديد</Long>
      </form>
      <div className="another">
        <button>إنشاء حساب جديد</button>
        <span>ليس لديك حساب ؟ </span>
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
    </Wrapper>
  );
}

export default FForm;
