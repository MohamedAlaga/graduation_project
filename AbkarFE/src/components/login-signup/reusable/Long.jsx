/* eslint-disable react/prop-types */

function Long({ onClick, children }) {
  return (
    <button className="long" onClick={onClick}>
      {children}
    </button>
  );
}

export default Long;
