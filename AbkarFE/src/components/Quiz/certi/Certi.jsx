// import  useRef  from "react";
import styles from "./ceri.module.css";
import certificate from "../../../assets/bedo/certificate.jpg";
import html2canvas from "html2canvas";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Certi({ userName }) {
	// const certificateRef = useRef(null);
	console.log(userName);
	useEffect(() => {
		handleScreenshot();
	}, []);
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

	return (
		<>
			<main className={`${styles.body}`}>
				<div className={`${styles.certificate} my-3`}>
					<div
						// ref={certificateRef}
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
			</main>
		</>
	);
}

export default Certi;
