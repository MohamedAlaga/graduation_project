/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Long({ path, children }) {
  const navigate = useNavigate();
  return (
    <button className="long" onClick={() => navigate(path)}>
      {children}
    </button>
  );
}

export default Long;
