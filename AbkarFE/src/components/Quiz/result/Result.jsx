import styles from "./Result.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import vector from "../../../assets/bedo/Vector 27.svg";
import smile from "../../../assets/bedo/Smiling face with sunglasses.svg";
import { useNavigate, useParams } from "react-router-dom";
import percentage90 from "../../../assets/bedo/90.svg";
import percentage70 from "../../../assets/bedo/70.svg";
import percentage50 from "../../../assets/bedo/50.svg";
import percentage30 from "../../../assets/bedo/30.svg";

const Result = () => {
	let navigate = useNavigate();
	function toAnswers() {
		navigate("/Answers");
	}
	function toExam() {
		navigate("/Exam");
	}
	function toLevel() {
		navigate("/Level");
	}
	const percentage = useParams()
	console.log(percentage);
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
							{percentage.percentage == 100 ? (
								<img className={`${styles.nerd}`} src={smile} alt="nerd" />
							) : percentage.percentage >= 90 && percentage.percentage < 100 ? (
								<img
									className={`${styles.nerd}`}
									src={percentage90}
									alt="nerd"
								/>
							) : percentage.percentage >= 70 && percentage.percentage < 90 ? (
								<img
									className={`${styles.nerd}`}
									src={percentage70}
									alt="nerd"
								/>
							) : percentage.percentage >= 50 && percentage.percentage < 70 ? (
								<img
									className={`${styles.nerd}`}
									src={percentage50}
									alt="nerd"
								/>
							) : percentage.percentage < 50 ? (
								<img
									className={`${styles.nerd}`}
									src={percentage30}
									alt="nerd"
								/>
							) : (
								<img
									className={`${styles.nerd}`}
									src={percentage30}
									alt="nerd"
								/>
							)}
						</div>
					</div>
					{/* F-3 */}
					<div className={styles.content}>
						{percentage.percentage == 100 ? (
							<p className={`${styles.score_text} pb-3 `}>😎 عبقري 😎</p>
						) : percentage.percentage >= 90 && percentage.percentage < 100 ? (
							<p className={`${styles.score_text} pb-3 `}>😍 احسنت 😍</p>
						) : percentage.percentage >= 70 && percentage.percentage < 90 ? (
							<p className={`${styles.score_text} pb-3 `}>😃 جيد جداً 😃</p>
						) : percentage.percentage >= 50 && percentage.percentage < 70 ? (
							<p className={`${styles.score_text} pb-3 `}>😊 لديك المزيد 😊</p>
						) : percentage.percentage < 50 ? (
							<p className={`${styles.score_text} pb-3 `}>🤗 حاول مرة اخرى 🤗</p>
						) : (
							<p className={`${styles.score_text} pb-3 `}>🤗 حاول مرة اخرى 🤗</p>
						)}
						<p className={styles.score}>{percentage.percentage}%</p>
					</div>
					{/* F-4 */}
					<div className={`${styles.buttons} mt-3 text-center`}>
						<div className={styles.btn2}>
							<button onClick={toAnswers} className="btn main-btn">
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
