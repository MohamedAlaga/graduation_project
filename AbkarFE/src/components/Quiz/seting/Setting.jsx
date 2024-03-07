import styles from "./Setting.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import eye from "../../../assets/bedo/mdi_eye-off-outline.svg";
import delacc from "../../../assets/bedo/deleteicon.svg";
import signout from "../../../assets/bedo/sign_out.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Setting() {
  let navigate = useNavigate();
	function toHello() {
		navigate("/hello");
	}
	let [eyee ,setEyee ] = useState("password");
	function removeEye() {
		if (eyee == "password") {
			setEyee("text");
			
		}else{
			setEyee("password");
		}
	}
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
					<form>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								اسم العبقري
							</label>
							<input className={styles.input} id="1" type="text" name="name1" />
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								اسمك
							</label>
							<input className={styles.input} id="1" type="text" name="name1" />
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								سن العبقري
							</label>
							<input
								className={styles.input}
								id="1"
								type="number"
								maxLength={2}
								name="name1"
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								اسم العبقري
							</label>
							<input
								className={styles.input}
								id="1"
								type="email"
								name="name1"
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								كلمة المرور
							</label>
							<img onClick={removeEye} className={styles.eye} src={eye} alt="arrow-back" />
							<input
								className={styles.input}
								id="1"
								type={eyee}
								name="name1"
							/>
						</div>
						<div className={styles.info}>
							<label className={styles.label} htmlFor="3">
								رقم الهاتف
							</label>
							<input
								className={styles.input}
								id="1"
								type="tel"
								maxLength={11}
								name="name1"
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
									
										<img
											className={styles.signout}
											src={signout}
											alt="signout"
										/>
									
									<p className={styles.caption}>تسجيل الخروج</p>
								</div>
							</div>
							<div className={styles.btn1}>
								<button className="btn main-btn text-center">
									<p className={styles.btext}>الغاء</p>
								</button>
							</div>
							<div className={styles.btn2}>
								<button className="btn main-btn">
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
