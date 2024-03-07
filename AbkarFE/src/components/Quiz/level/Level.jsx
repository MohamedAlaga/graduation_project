import styles from "./Level.module.css";
import up from "../../../assets/bedo/Vector 1701 (3.svg";
import arrow from "../../../assets/bedo/arrow_back (1).svg";
import rectanle from "../../../assets/bedo/Rectangle 10.svg";
import { useNavigate } from "react-router-dom";
function Level() {
	let navigate = useNavigate();
	function toResult() {
		navigate("/Result");
	}
	function toHello() {
		navigate("/hello");
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
						<p className={styles.title}>شهادةالمستوي</p>

						<img
							onClick={toResult}
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
						<img src={rectanle} alt="Landscape picture" />
						<p className={`${styles.certificate_text} `}>تصميم الشهادة</p>
					</div>
					<div className={styles.btn1}>
						<button className="btn main-btn">
							<p className={`${styles.certificate_text1}`}>تحميل الشهادة</p>
						</button>
					</div>
					<p className={`${styles.certificate_text2}`}>
						انت الأن مؤهل للانتقال الي المستوي الثاني
					</p>
					<div className={`${styles.btn2}`}>
						<button onClick={toHello} className="btn main-btn">
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
