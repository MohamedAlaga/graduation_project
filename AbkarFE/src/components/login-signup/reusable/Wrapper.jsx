/* eslint-disable react/prop-types */
function Wrapper({ height, children }) {
  return (
    <div className="Wrapper">
      <div className="Wrapper__window" style={{ height }}>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
