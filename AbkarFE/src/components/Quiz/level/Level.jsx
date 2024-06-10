import React, { useRef, useState } from "react";
import styles from "./Level.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import rectanle from "../../../assets/bedo/Rectangle 10.svg";
import certificate from "../../../assets/bedo/certificate.jpg";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useFormik } from "formik";
import axios from "axios";
import { useAuth } from "../../../AuthContext";

function Level() {
	let navigate = useNavigate();
	let [userName, setUserName] = useState("");
	const certificateRef = useRef(null); // Create a ref

	async function handleScreenshot() {
		try {
			const element = document.body; // Use the ref to get the element
			if (!element) {
				console.error("Element not found!");
				return;
			}
			const canvas = await html2canvas(element, { useCORS: true });
			const image = canvas.toDataURL("image/png");

			// Create a link to download the image
			const link = document.createElement("a");
			link.href = image;
			link.download = "certificate.png"; // Name of the downloaded file
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Error taking screenshot:", error);
		}
	}

	function toCourse() {
		navigate("/Course");
	}
	function toHello() {
		navigate("/hello");
	}

	const { token } = useAuth();
	const formik = useFormik({
		initialValues: {
			name: "",
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post(
					`http://127.0.0.1:8000/api/certificate`,
					values,
					{
						headers: {
							Authorization: `Bearer ${token}`,
							"Content-Type": "application/json",
						},
					}
				);
				console.log(response.data.data.name);
				setUserName(response.data.data.name); // Assuming the API returns the name in response.data.name

				// Wait a moment to ensure the username is updated in the DOM
				setTimeout(handleScreenshot, 1000);
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
						<div
							ref={certificateRef}
							id="certificateContainer"
							className={`${styles.certificate_full} certificate_full`}
						>
							<img
								className={styles.certificate_img}
								src={certificate}
								alt="Overlay"
							/>
							<p className={`${styles.certificate_text} `}>{userName}</p>
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
