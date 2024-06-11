import styles from "./hello.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import vector from "../../../assets/bedo/Vector 27.svg";
import nerd from "../../../assets/bedo/Nerd face.svg";
import { useNavigate } from "react-router-dom";

const Hello = () => {
  let navigate = useNavigate();

  function toExam() {
    navigate("/Exam");
  }
  function toSetting() {
    navigate("/course");
  }
  
  
  return (
    <>
      <main className={styles.body}>
        <div>
          {/* F-1 */}
          <div
            className={`${styles.header} d-flex justify-content-center align-items-center`}
          >
            <img className={styles.image} src={up} alt="Landscape picture" />
            <div>
              <p className={styles.title}>اختبر معلوماتك</p>

              <img
                onClick={toSetting}
                className={styles.arr}
                src={arrow}
                alt="arrow-back"
              />
            </div>
          </div>
          {/* F-2 */}
          <div className={`text-center d-flex flex-column align-items-center`}>
            <div className={`${styles.logo} my-3`}>
              <img
                src={vector}
                className={`${styles.vector}`}
                alt="Landscape picture"
              />
              <img className={`${styles.nerd} `} src={nerd} alt="nerd" />
            </div>
          </div>
          {/* F-3 */}
          <div className={styles.content}>
            اختبار بسيط لمعلوماتك علي الكورس بالكامل من البداية الي النهاية
            <br />
            مكون من ١٠  اسئله بسيطه
            <br />
            يمكنك اعادة الاختبار اكثر من مره
            <br />
            😊 لا يوجد وقت للانهاء 😊
          </div>
          {/* F-4 */}
          <div className="mt-3 text-center d-flex justify-content-center">
            <div className={styles.btn}>
              <button onClick={toExam} className="btn main-btn">
                <p className={styles.button_p}>اذهب للاختبار</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hello;
