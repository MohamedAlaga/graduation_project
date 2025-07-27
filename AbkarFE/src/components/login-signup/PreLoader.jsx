import logo from "../../assets/Logo/Full Logo.png";

function PreLoader() {
  return (
    <div className="PreLoader">
      <div className="logo">
        <img src={logo} alt="logo" width={350} />
      </div>
    </div>
  );
}

export default PreLoader;
