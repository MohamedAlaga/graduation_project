/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Green({ path, children }) {
  const navigate = useNavigate();

  return (
    <button className="GreenBtn" onClick={() => navigate(path)}>
      {children}
    </button>
  );
}

export default Green;
