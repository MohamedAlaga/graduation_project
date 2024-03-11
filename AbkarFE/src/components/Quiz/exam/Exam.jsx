import styles from "./Exam.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import { useNavigate } from "react-router-dom";
const Exam = () => {
	let navigate = useNavigate();
	function toHello() {
		navigate("/hello");
	}
	function toResult() {
		navigate("/Result");
	}
	return (
		<>
			<main className={styles.body}>
				<div>
					{/* F-1 */}
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
					{/* F-2 */}
					<div className={`${styles.form_edit}`}>
						<form>
							{/* qqqqqqqqqqqqqqqqqqq */}
							<div className={styles.qbox}>
								<div className={styles.question}>
									<p>١- ما اسم اول جهاز كمبيوتر تم اختراعه؟</p>
								</div>
								<div className={styles.answers}>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="1"
											type="radio"
											name="name1"
											value="value1"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name1"
											value="value3"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name1"
											value="value3"
										/>
									</div>
								</div>
							</div>
							{/* qqqqqqqqqqqqqqqqqqq */}
							<div className={styles.qbox}>
								<div className={styles.question}>
									<p>١- من هو المخترع الرئيسي لجهاز الحاسوب الأول؟</p>
								</div>
								<div className={styles.answers}>
									<div className={styles.answer}>
										<label htmlFor="3">جون فون نويمان</label>
										<input
											className={styles.label}
											id="1"
											type="radio"
											name="name2"
											value="value1"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">ألان تورنج</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name2"
											value="value3"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">جون بريسبر إيكرت</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name2"
											value="value3"
										/>
									</div>
								</div>
							</div>
							{/* qqqqqqqqqqqqqqqqqqq */}
							<div className={styles.qbox}>
								<div className={styles.question}>
									<p>١- ما اسم اول جهاز كمبيوتر تم اختراعه؟</p>
								</div>
								<div className={styles.answers}>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="1"
											type="radio"
											name="name3"
											value="value1"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name3"
											value="value3"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name3"
											value="value3"
										/>
									</div>
								</div>
							</div>
							{/* qqqqqqqqqqqqqqqqqqq */}
							<div className={styles.qbox}>
								<div className={styles.question}>
									<p>١- ما اسم اول جهاز كمبيوتر تم اختراعه؟</p>
								</div>
								<div className={styles.answers}>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="1"
											type="radio"
											name="name1"
											value="value1"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name1"
											value="value3"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name1"
											value="value3"
										/>
									</div>
								</div>
							</div>
							{/* qqqqqqqqqqqqqqqqqqq */}
							<div className={styles.qbox}>
								<div className={styles.question}>
									<p>١- ما اسم اول جهاز كمبيوتر تم اختراعه؟</p>
								</div>
								<div className={styles.answers}>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="1"
											type="radio"
											name="name1"
											value="value1"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name1"
											value="value3"
										/>
									</div>
									<div className={styles.answer}>
										<label htmlFor="3">مارك ١</label>
										<input
											className={styles.label}
											id="3"
											type="radio"
											name="name1"
											value="value3"
										/>
									</div>
								</div>
							</div>
							<div
								className={`${styles.buttons} mt-3 text-center d-flex align-items-right justify-content-right`}
							>
								<div className={styles.btn2}>
									<button onClick={toHello} className="btn main-btn">
										<p className={styles.btn_text}>الغاء</p>
									</button>
								</div>
								<div className={styles.btn1}>
									<button type="submit" onClick={toResult} className="btn main-btn">
										<p className={styles.btn_text}>انهاء</p>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};

export default Exam;
