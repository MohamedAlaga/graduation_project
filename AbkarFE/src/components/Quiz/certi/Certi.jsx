import styles from "./ceri.module.css";
import certificate from "../../../assets/bedo/certificate.jpg";
import html2canvas from "html2canvas";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../AuthContext";

function Certi() {
  let param = useParams();
  let navigate = useNavigate();

  let { isLoggedIn } = useAuth();
  if (!isLoggedIn) navigate("/login");

  useEffect(() => {
    handleScreenshot();
    setTimeout(() => {
      navigate("/Level");
    });
  }, []);

  async function handleScreenshot() {
    try {
      const element = document.body;

      const canvas = await html2canvas(element, { useCORS: true });
      const image = canvas.toDataURL("image/jpeg");

      // Create a link to download the image
      const link = document.createElement("a");
      link.href = image;
      link.download = "certificate.jpeg"; // Name of the downloaded file
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
        <div className={`${styles.certificate}`}>
          <div className={`${styles.certificate_full} `}>
            <img
              className={`${styles.certificate_img}`}
              src={certificate}
              alt="Overlay"
            />
            <p className={`${styles.certificate_text} `}>{param.name}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Certi;
