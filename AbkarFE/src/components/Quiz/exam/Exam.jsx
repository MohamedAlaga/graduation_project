import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Exam.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import { useAuth } from "../../../AuthContext";
import { useFormik } from "formik";
import axios from "axios";

const Exam = () => {
  const { token, isLoggedIn } = useAuth();
  const [testData, setTestData] = useState(null);
  const navigate = useNavigate();
  function toHello() {
    navigate("/hello");
  }

  if (!isLoggedIn) navigate("/login");

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        let testId = 1; // Replace this with your actual test ID variable
        const response = await fetch(
          `http://127.0.0.1:8000/api/tests/create/${testId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log("Fetched test data:", data);
        setTestData(data.data.test);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchTestData();
  }, [token]);

  const answerss = useFormik({
    initialValues: {
      answers: [],
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/user-tests/1/answers`,
          { answers: values.answers },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        if (response.data.success === true) {
          navigate("/result/" + response.data.data.percentage);
        }
        // Handle the response as needed
      } catch (error) {
        console.error("Error submitting answers:", error);
      }
    },
  });

  const handleAnswerChange = (questionId, answerId) => {
    const newAnswers = answerss.values.answers.filter(
      (ans) => ans.question_id !== questionId
    );
    newAnswers.push({ question_id: questionId, answer_id: answerId });
    answerss.setFieldValue("answers", newAnswers);
  };

  return (
    <>
      <main className={styles.body}>
        <div>
          {/* Header */}
          <div
            className={`${styles.header} d-flex justify-content-center align-items-center fixed-top`}
          >
            <img className={styles.img} src={up} alt="Landscape picture" />
            <div>
              <p className={styles.title}>لا تتوتر</p>
              <img
                onClick={toHello}
                className={styles.arr}
                src={arrow}
                alt="arrow-back"
              />
            </div>
          </div>
          {/* Form */}
          <div className={`${styles.form_edit}`}>
            {testData && (
              <form onSubmit={answerss.handleSubmit} className={styles.form}>
                {testData.questions.slice(0, 10).map((question, index) => (
                  <div key={question.id} className={styles.qbox}>
                    <div className={styles.question}>
                      <p>{`${index + 1}- ${question.text}`}</p>
                    </div>
                    <div className={styles.answers}>
                      {question.answers.map((answer) => (
                        <div key={answer.id} className={styles.answer}>
                          <label htmlFor={`${question.id}-${answer.id}`}>
                            {answer.text}
                          </label>
                          <input
                            className={styles.label}
                            id={`${question.id}-${answer.id}`}
                            type="radio"
                            name={`question-${question.id}`}
                            value={answer.id}
                            onChange={() =>
                              handleAnswerChange(question.id, answer.id)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div
                  className={`${styles.buttons} mt-3 text-center d-flex align-items-right justify-content-right`}
                >
                  <div className={styles.btn2}>
                    <button onClick={toHello} className="btn main-btn">
                      <p className={styles.btn_text}>الغاء</p>
                    </button>
                  </div>
                  <div className={styles.btn1}>
                    <button type="submit" className="btn main-btn">
                      <p className={styles.btn_text}>انهاء</p>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Exam;
