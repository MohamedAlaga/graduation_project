import { useState } from "react";
import styles from "./Level.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import rectanle from "../../../assets/bedo/Rectangle 10.svg";
import certificate from "../../../assets/bedo/certificate.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useAuth } from "../../../AuthContext";

function Level() {
  let [userNamee, setUserNamee] = useState("");

  let navigate = useNavigate();

  let { token, isLoggedIn } = useAuth();
  if (!isLoggedIn) navigate("/login");

  function toCourse() {
    navigate("/Course");
  }
  function toHello() {
    navigate("/hello");
  }
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          `http://127.0.0.1:8000/api/certificate`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data.data.name);
        setUserNamee(data.data.name); // Assuming the API returns the name in response.data.name

        setTimeout(() => {
          navigate("/Certi/" + data.data.name);
        }, 1000); // 1 seconds
      } catch (error) {
        console.error("Error Retrieving Names:", error);
      }
    },
  });

  return (
    <>
      <main className={styles.body}>
        {/*--------------------------- HEADER ---------------------------*/}
        <div
          className={`${styles.header} d-flex justify-content-center align-items-center`}
        >
          <img className={styles.image} src={up} alt="Landscape picture" />
          <div>
            <p className={styles.title}>شهادةالمستوي</p>

            <img
              onClick={toHello}
              className={styles.arr}
              src={arrow}
              alt="arrow-back"
            />
          </div>
        </div>
        {/*--------------------------- SECOND ---------------------------*/}
        <div className={styles.content}>
          <p className="pt-3">🥳 مبروووك 🥳</p>
        </div>
        {/*--------------------------- Third ---------------------------*/}
        <div className={`text-center d-flex flex-column align-items-center`}>
          <div className={`${styles.certificate} my-3`}>
            <img
              className={styles.back_img}
              src={rectanle}
              alt="Landscape picture"
            />
            <div className={`${styles.certificate_full} certificate_full`}>
              <img
                className={styles.certificate_img}
                src={certificate}
                alt="Overlay"
              />
              <p className={`${styles.certificate_text} `}>{userNamee}</p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <input
                className={`${styles.settingPassword}`}
                type="text"
                placeholder="ادخل الاسم المفضل"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <button className={`${styles.settingBtn}`} type="submit">
              تحميل النتيجة
            </button>
          </form>

          <p className={`${styles.certificate_text2}`}>
            انت الأن مؤهل للانتقال الي المستوي الثاني
          </p>
          <div className={`${styles.btn2}`}>
            <button onClick={toCourse} className="btn main-btn">
              <p className={`${styles.certificate_text3}`}>
                انتقل الي المستوي الثاني
              </p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Level;
