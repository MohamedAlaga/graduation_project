/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Red({ path, children }) {
  const navigate = useNavigate();
  return (
    <button className="RedBtn" onClick={() => navigate(path)}>
      {children}
    </button>
  );
}

export default Red;
