import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/login-signup/main.css";
import Teen from "./components/login-signup/Teen";
import LogIn from "./components/login-signup/LogIn";
import Age from "./components/login-signup/Age";
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
