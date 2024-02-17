import Wrapper from "./reusable/Wrapper";
import Green from "./reusable/Green";
import Red from "./reusable/Red";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";

function Age() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setInitialLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [initialLoad]);

  return loading && initialLoad ? (
    <PreLoader />
  ) : (
    <Wrapper height="500px">
      <div className="Age">
        <div className="Age__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="388"
            height="258"
            viewBox="0 0 388 258"
            fill="none"
          >
            <path
              d="M19.9274 70.5557C16.4711 87.5007 31.7023 99.6815 31.7023 117.368C31.7023 132.272 13.3274 137.642 8.39725 149.721C0.473711 169.133 -0.717782 180.78 8.39756 196.741C25.643 226.937 54.0861 232.86 82.5066 222.623C117.678 207.331 133.075 231.934 154.286 240.741C182.81 254.289 217.123 263.636 250.544 247.398C273.491 236.249 278.314 216.821 311.743 216.821C335.363 216.821 359.787 206.951 373.42 190.879C400.195 159.316 381.349 97.0097 343.987 82.858C321.924 74.501 309.876 73.2693 303.437 52.6618C297.81 34.6551 293.766 25.1528 277.335 14.3679C245.641 -6.43632 212.796 2.82973 185.113 14.3679C166.873 21.9702 151.025 35.4965 129.813 26.5658C103.755 17.7241 80.3502 15.6917 58.5422 23.1438C39.3915 30.5955 23.6087 52.5075 19.9274 70.5557Z"
              fill="#FFD200"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p>كم عمرك</p>
        </div>
        <div className="Age__bottom">
          <Green onClick={() => navigate("/login")}>6 - 12</Green>
          <Red onClick={() => navigate("/13-18")}>13 - 18</Red>
        </div>
      </div>
    </Wrapper>
  );
}

export default Age;
