import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/login-signup/main.css";
import Age from "./components/login-signup/Age";
import Teen from "./components/login-signup/Teen";
import LogIn from "./components/login-signup/LogIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login - Signup flow */}
          <Route path="/" element={<Age />} />
          <Route path="/13-18" element={<Teen />} />
          <Route path="/login" element={<LogIn />} />

          {/* Home flow */}

          {/* Quiz flow */}

          {/* Settings flow */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
