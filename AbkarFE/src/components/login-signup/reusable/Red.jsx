/* eslint-disable react/prop-types */
function Red({ onClick, children }) {
  return (
    <button className="RedBtn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Red;
