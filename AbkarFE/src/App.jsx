import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/login-signup/main.css";
import Teen from "./components/login-signup/Teen";
import LogIn from "./components/login-signup/LogIn";
import { Suspense, lazy } from "react";
import PreLoader from "./components/login-signup/PreLoader";
const Age = lazy(() => import("./components/login-signup/Age"));

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
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
    </Suspense>
  );
}

export default App;
