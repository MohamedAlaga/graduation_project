import Wrapper from "./reusable/Wrapper";
import Green from "./reusable/Green";
import Red from "./reusable/Red";
import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";

function Age() {
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
            className="big"
          >
            <path
              d="M19.9274 70.5557C16.4711 87.5007 31.7023 99.6815 31.7023 117.368C31.7023 132.272 13.3274 137.642 8.39725 149.721C0.473711 169.133 -0.717782 180.78 8.39756 196.741C25.643 226.937 54.0861 232.86 82.5066 222.623C117.678 207.331 133.075 231.934 154.286 240.741C182.81 254.289 217.123 263.636 250.544 247.398C273.491 236.249 278.314 216.821 311.743 216.821C335.363 216.821 359.787 206.951 373.42 190.879C400.195 159.316 381.349 97.0097 343.987 82.858C321.924 74.501 309.876 73.2693 303.437 52.6618C297.81 34.6551 293.766 25.1528 277.335 14.3679C245.641 -6.43632 212.796 2.82973 185.113 14.3679C166.873 21.9702 151.025 35.4965 129.813 26.5658C103.755 17.7241 80.3502 15.6917 58.5422 23.1438C39.3915 30.5955 23.6087 52.5075 19.9274 70.5557Z"
              fill="#FFD200"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="280"
            height="196"
            viewBox="0 0 280 196"
            fill="none"
            className="small"
          >
            <path
              d="M28.3628 51.5027C26 64.0092 28.3628 84.5092 28.3628 87.5092C28.3628 98.5092 18.0397 102.553 11.9456 110.001C1.16866 121.509 0.838444 140.009 3.16911 152.509C8.66928 182.009 52.197 181.352 71.6257 173.796C95.6692 162.509 105.169 180.509 119.669 187.009C139.169 197.009 163.169 194.009 186.016 182.025C201.703 173.796 205 159.456 227.853 159.456C244 159.456 260.696 152.172 270.016 140.31C288.32 117.014 272.5 77.5092 246.959 67.0643C231.876 60.8963 225.248 61.0092 220.846 45.7994C217 32.5092 215.5 22.9687 205.5 13.5093C187 -3.99075 160.211 1.51616 141.286 10.0321C128.817 15.6432 117.983 25.6265 103.482 19.0351C85.6688 12.5092 69.6688 11.0092 54.7605 16.5093C41.6688 22.0092 30.8794 38.1818 28.3628 51.5027Z"
              fill="#FFD200"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p>كم عمرك</p>
        </div>
        <div className="Age__bottom">
          <Green path="/login">6 - 12</Green>
          <Red path="/13-18">13 - 18</Red>
        </div>
      </div>
    </Wrapper>
  );
}

export default Age;
