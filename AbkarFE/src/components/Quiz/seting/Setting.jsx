import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../AuthContext";
import { useFormik } from "formik";
import styles from "./Setting.module.css";
import up from "../../../assets/bedo/Vector 1701g.svg";
import arrow from "../../../assets/bedo/arrow_backg.svg";
import eye from "../../../assets/bedo/mdi_eye-off-outline.svg";
import delacc from "../../../assets/bedo/deleteicon.svg";
import signout from "../../../assets/bedo/sign_out.svg";

function Setting() {
	let navigate = useNavigate();
	function toHello() {
		navigate("/pageone");
	}
	let [eyee, setEyee] = useState("password");
	function removeEye() {
		setEyee(eyee === "password" ? "text" : "password");
	}

	const { token } = useAuth();
	let [userr, setUserr] = useState({});
	let [isDataFetched, setIsDataFetched] = useState(false);

	async function getUserInfo() {
		try {
			const response = await axios.get(
				"http://127.0.0.1:8000/api/user/setting",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setUserr(response.data);
			setIsDataFetched(true);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	}

	useEffect(() => {
		getUserInfo();
	}, [token]);



	async function updateUser(data) {
		let user = await axios.post("http://127.0.0.1:8000/api/user/update", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(user);
		if (user.status === 200) {
			navigate("/pageone");
		}
	}



	const validate = (values) => {
		const errors = {};
		if (values.password !== values.repassword) {
			errors.repassword = "كلمة المرور غير متطابقة";
		}
		return errors;
	};

	const userInfo = useFormik({
		initialValues: {
			age: "",
			email: "",
			father_name: "",
			name: "",
			phone: "",
			password: "",
			repassword: "",
		},
		validate,
		onSubmit: (values) => {
			const errors = validate(values);
			if (Object.keys(errors).length > 0) {
				if (errors.repassword) {
					alert(errors.repassword);
				}
			} else {
				console.log(values);
				updateUser(values);
				// Submit the form data here, for example:
				// axios.post('your-api-endpoint', values);
			}
		},
	});

	useEffect(() => {
		if (isDataFetched) {
			userInfo.setValues({
				age: userr.age || "",
				email: userr.email || "",
				father_name: userr.father_name || "",
				name: userr.name || "",
				phone: userr.phone || "",
				
			});
			
		}
	}, [isDataFetched, userr]);

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
								name="father_name"
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
								alt="toggle visibility"
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
								تاكيد كلمة المرور
							</label>
							<img
								onClick={removeEye}
								className={styles.eye}
								src={eye}
								alt="toggle visibility"
							/>
							<input
								className={styles.input}
								type={eyee}
								name="repassword"
								value={userInfo.values.repassword}
								onChange={userInfo.handleChange}
								onBlur={userInfo.handleBlur}
								id="6"
								
							/>
							{userInfo.errors.repassword && userInfo.touched.repassword ? (
								<div className={styles.error}>{userInfo.errors.repassword}</div>
							) : null}
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="7">
								رقم الهاتف
							</label>
							<input
								className={styles.input}
								id="7"
								type="tel"
								maxLength={11}
								name="phone"
								value={userInfo.values.phone}
								onChange={userInfo.handleChange}
								required
							/>
						</div>
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
								<button
									className="btn main-btn text-center"
									type="button"
									onClick={toHello}
								>
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
