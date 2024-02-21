/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/login-signup/main.css";
import Teen from "./components/login-signup/Teen";
import LogIn from "./components/login-signup/LogIn";
import Age from "./components/login-signup/Age";
import Forgot from "./components/login-signup/Forgot";
import Check from "./components/login-signup/Check";
import Reassign from "./components/login-signup/Reassign";
import Parents from "./components/login-signup/Parents";
import Welcome from "./components/login-signup/Welcome";
import FForm from "./components/login-signup/FForm";
import PageOne from "./components/OnBoard/PageOne/PageOne";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login - Signup flow */}

          <Route path="/" element={<Age />} />
          <Route path="/13-18" element={<Teen />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/password" element={<Forgot />} />
          <Route path="/check-password" element={<Check />} />
          <Route path="/reassign-password" element={<Reassign />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/form" element={<FForm />} />

          {/* Home flow */}
          <Route path="/pageone" element={<PageOne />} />

          {/* Quiz flow */}

          {/* Settings flow */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
