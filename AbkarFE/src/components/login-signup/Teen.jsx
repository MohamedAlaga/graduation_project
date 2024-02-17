import Wrapper from "./reusable/Wrapper";
import Green from "./reusable/Green";
import { useNavigate } from "react-router-dom";
import glass from "../../assets/Hourglass done.svg";

function Teen() {
  const navigate = useNavigate();

  return (
    <Wrapper height="650px">
      <div className="Teen">
        <div className="title">جاري العمل عليه</div>
        <div className="Teen__shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="278"
            viewBox="0 0 300 278"
            fill="none"
          >
            <path
              d="M61.8778 269.963C82.0025 272.264 103.164 263.935 125.711 260.329C142.444 257.653 151.121 259.594 164.396 266.166C187.066 277.39 212.682 276.982 232.797 274.712C280.266 269.357 279.208 226.973 267.05 208.055C248.888 184.643 277.852 175.393 288.312 161.274C304.403 142.286 299.576 118.917 280.291 96.6705C267.05 81.3953 243.975 78.1853 243.975 55.9328C243.975 40.2102 232.253 23.9527 213.166 14.8777C182.108 -3.53772 121.954 -5.1434 98.4426 29.6463C89.0381 43.5623 78.1742 49.4498 53.2015 49.4498C17.2563 49.4498 6.74065 70.3235 3.62194 81.5634C-4.91985 112.348 22.6915 129.867 30.2909 143.65C36.4884 154.889 39.6379 168.066 29.0314 182.186C19.3823 195.031 12.5086 225.371 19.1155 243.202C24.0734 256.582 40.4427 267.513 61.8778 269.963Z"
              fill="#FFD200"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <img src={glass} alt="glass" />
        </div>
        <p>سيتم إضافة قسم (18 - 13) في التحديث القادم</p>
        <Green onClick={() => navigate("/")}>رجوع</Green>
      </div>
    </Wrapper>
  );
}
export default Teen;
