import styles from "./Result.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import vector from "../../../assets/bedo/Vector 27.svg";
import smile from "../../../assets/bedo/Smiling face with sunglasses.svg";
import { useNavigate } from "react-router-dom";

const Result = () => {
	let navigate = useNavigate();
	function toExam() {
		navigate("/Exam");
	}
	function toLevel() {
		navigate("/Level");
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
							<p className={styles.title}>نتيجة الاختبار</p>

							<img
								onClick={toExam}
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
							<img className={`${styles.nerd} `} src={smile} alt="nerd" />
						</div>
					</div>
					{/* F-3 */}
					<div className={styles.content}>
						<p className={`${styles.score_text} pb-3 `}>😎 عبقري 😎</p>
						<p className={styles.score}>100%</p>
					</div>
					{/* F-4 */}
					<div className={`${styles.buttons} mt-3 text-center`}>
						<div className={styles.btn2}>
							<button onClick={toExam} className="btn main-btn">
								<p className={styles.btn_text}>مراجعة اجاباتك</p>
							</button>
						</div>
						<div className={styles.btn1}>
							<button onClick={toExam} className="btn main-btn">
								<p className={styles.btn_text}>إعادة الاختبار</p>
							</button>
						</div>
						<div className={styles.btn3}>
							<button onClick={toLevel} className="btn main-btn">
								<p className={styles.btn_text}>شهادة المستوي</p>
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Result;
