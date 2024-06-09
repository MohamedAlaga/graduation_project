import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Answers.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import right from "../../../assets/bedo/correct circle.svg";
import wrong from "../../../assets/bedo/incorrect circle.svg";
import { useAuth } from "../../../AuthContext";

const Answers = () => {
	const { token } = useAuth();
	const [testData, setTestData] = useState(null);
	const [userAnswers, setUserAnswers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTestData = async () => {
			try {
				const testId = 1; // Replace this with your actual test ID variable
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

	useEffect(() => {
		const fetchUserAnswers = async () => {
			try {
				const testId = 1; // Replace this with your actual test ID variable
				const response = await fetch(
					`http://127.0.0.1:8000/api/user-tests/${testId}/answers`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const data = await response.json();
				console.log("Fetched user answers:", data);
				setUserAnswers(data?.data?.user_test_answers || []);
			} catch (error) {
				console.error("Error fetching user answers:", error);
			}
		};

		fetchUserAnswers();
	}, [token]);

	function toHello() {
		navigate("/hello");
	}
	function toLevel() {
		navigate("/level");
	}

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
							<div className={styles.circles}>
								<div className={styles.correctCircle}>
									<p className={styles.correctText}>صح</p>
									<img src={right} alt="right" />
								</div>
								<div className={styles.incorrectCircle}>
									<p className={styles.incorrectText}>خطا</p>
									<img src={wrong} alt="wrong" />
								</div>
							</div>
							<p className={styles.title}>اجاباتك</p>
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
							<form className={styles.form}>
								{testData.questions.slice(0, 10).map((question, index) => (
									<div key={question.id} className={styles.qbox}>
										<div className={styles.question}>
											<p>{`${index + 1}- ${question.text}`}</p>
										</div>
										<div className={styles.answers}>
											{question.answers.map((answer) => (
												<div key={answer.id} className={`${styles.answer} `}>
													<label htmlFor={`${question.id}-${answer.id}`}>
														{answer.text}
													</label>
													<input
														className={
															answer.is_correct
																? `${
																		answer.is_correct
																			? styles.correct
																			: styles.correct
																}`
																: `${
																		answer.is_correct
																			? styles.incorrect
																			: styles.incorrect
																}`
														}
														id={`${question.id}-${answer.id}`}
														type="checkbox"
														name={`question-${question.id}`}
														value={answer.id}
														checked={
															answer.is_correct ||
															userAnswers.find(
																(ans) => ans.question_id === question.id
															)?.answer_id === answer.id
														}
														readOnly
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
											<p className={styles.btn_text}>السابق</p>
										</button>
									</div>
									<div className={styles.btn1}>
										<button
											onClick={toLevel}
											type="submit"
											className="btn main-btn"
										>
											<p className={styles.btn_text}>التالي</p>
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

export default Answers;
