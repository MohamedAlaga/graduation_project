import styles from "./Setting.module.css";
import up from "../../../assets/bedo/Vector 1701g.svg";
import arrow from "../../../assets/bedo/arrow_backg.svg";
import eye from "../../../assets/bedo/mdi_eye-off-outline.svg";
import delacc from "../../../assets/bedo/deleteicon.svg";
import signout from "../../../assets/bedo/sign_out.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../AuthContext";
import { useFormik } from "formik";


function Setting( ) {
	let navigate = useNavigate();
	function toHello() {
		navigate("/hello");
	}
	let [eyee, setEyee] = useState("password");
	function removeEye() {
		if (eyee == "password") {
			setEyee("text");
		} else {
			setEyee("password");
		}
	}

	let { token } = useAuth();
let [user, setUser] = useState([]);
	async function updateUser() {
		const user = await axios.get("http://127.0.0.1:8000/api/user/setting", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		
		setUser(user.data);
		console.log(user.data);
		
	}
	useEffect(() => {
		updateUser();
	}, []);
	

	const userInfo = useFormik({
		initialValues: {
			age: "22",
			email: "bedo@abo.kw",
			father_name: user.father_name,
			name: user.name,
			phone: "",
		},
		onSubmit: (values) => {
			if (!values.password) {
				delete values.password;
			}
			console.log(values);
			console.log(values);
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
						<p className={styles.title}>الاعدادات</p>

						<img
							onClick={toHello}
							className={styles.arr}
							src={arrow}
							alt="arrow-back"
						/>
					</div>
				</div>
				{/*--------------------------- SECOND ---------------------------*/}
				<div
					className={`${styles.content} text-center d-flex flex-column align-items-center`}
				>
					<form onSubmit={userInfo.handleSubmit}>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="1">
								اسم العبقري
							</label>
							<input
								className={styles.input}
								id="1"
								type="text"
								name="name"
								value={userInfo.values.name}
								onChange={userInfo.handleChange}
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="2">
								اسمك
							</label>
							<input
								className={styles.input}
								id="2"
								type="text"
								name="name1"
								value={userInfo.values.father_name}
								onChange={userInfo.handleChange}
								required
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								سن العبقري
							</label>
							<input
								className={styles.input}
								id="3"
								type="number"
								maxLength={2}
								name="age"
								value={userInfo.values.age}
								onChange={userInfo.handleChange}
								required
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="4">
								البريد الالكتروني
							</label>
							<input
								className={styles.input}
								id="4"
								type="email"
								name="email"
								value={userInfo.values.email}
								onChange={userInfo.handleChange}
								required
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="5">
								كلمة المرور
							</label>
							<img
								onClick={removeEye}
								className={styles.eye}
								src={eye}
								alt="arrow-back"
							/>

							<input
								className={styles.input}
								type={eyee}
								name="password"
								value={userInfo.values.password}
								onChange={userInfo.handleChange}
								id="5"
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="6">
								رقم الهاتف
							</label>
							<input
								className={styles.input}
								id="6"
								type="tel"
								maxLength={11}
								name="phone"
								value={userInfo.values.phone}
								onChange={userInfo.handleChange}
								required
							/>
						</div>
						{/* ---------------------------------------------------- */}
						<div
							className={`${styles.buttons} mt-3 text-center d-flex align-items-right justify-content-right`}
						>
							<div className={styles.icons}>
								<div>
									<img className={styles.delacc} src={delacc} alt="delete" />
									<p className={styles.caption}>حذف الحساب</p>
								</div>
								<div>
									<img className={styles.signout} src={signout} alt="signout" />

									<p className={styles.caption}>تسجيل الخروج</p>
								</div>
							</div>
							<div className={styles.btn1}>
								<button className="btn main-btn text-center">
									<p className={styles.btext}>الغاء</p>
								</button>
							</div>
							<div className={styles.btn2}>
								<button type="submit" className="btn main-btn">
									<p className={styles.btext}>حفظ</p>
								</button>
							</div>
						</div>
					</form>
				</div>
				{/*--------------------------- Third ---------------------------*/}
			</main>
		</>
	);
}

export default Setting;
