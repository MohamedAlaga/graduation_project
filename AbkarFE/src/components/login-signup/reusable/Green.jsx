/* eslint-disable react/prop-types */
function Green({ onClick, children }) {
  return (
    <button className="GreenBtn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Green;
