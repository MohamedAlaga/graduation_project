import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Answers.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import { useAuth } from "../../../AuthContext";

const Answers = () => {
	const { token } = useAuth();
	const [testData, setTestData] = useState(null);
	// const [userAnswers, setUserAnswers] = useState([]);
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

				// Fetch user's answers
				const answersResponse = await fetch(
					`http://127.0.0.1:8000/api/user-tests/1/answers`, // Replace with the correct endpoint for fetching user's answers
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const answersData = await answersResponse.json();
				console.log("Fetched user answers:", answersData);
				// setUserAnswers(answersData.answers || []);
			} catch (error) {
				console.error("Error fetching test data:", error);
			}
		};

		fetchTestData();
	}, [token]);

	function toHello() {
		navigate("/hello");
	}

	// const handleAnswerChange = (questionId, answerId) => {
	// 	const newAnswers = userAnswers.filter(
	// 		(ans) => ans.question_id !== questionId
	// 	);
	// 	newAnswers.push({ question_id: questionId, answer_id: answerId });
	// 	setUserAnswers(newAnswers);
	// };

	// const isCorrectAnswer = (question, answerId) => {
	// 	return question.correct_answer_id === answerId; // Adjust this based on your data structure
	// };

	// const getUserAnswer = (questionId) => {
	// 	const answer = userAnswers.find((ans) => ans.question_id === questionId);
	// 	return answer ? answer.answer_id : null;
	// };

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
							<form  className={styles.form}>
								{testData.questions.map((question, index) => (
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
														type="checkbox"
														name={`question-${question.id}`}
														value={answer.id}
														
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

export default Answers;
