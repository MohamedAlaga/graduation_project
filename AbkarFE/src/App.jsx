import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import Course from "./components/OnBoard/Course/Course";
import Video from "./components/OnBoard/Video/Video";
import MoreLearning from "./components/OnBoard/MoreLearning/MoreLearning";
import Community from "./components/OnBoard/Community/Community";
import Hello from "./components/Quiz/Hello/hello";
import Exam from "./components/Quiz/exam/Exam";
import Result from "./components/Quiz/result/Result";
import Level from "./components/Quiz/level/Level";
import Setting from "./components/Quiz/seting/Setting";

function App() {
  const [first, setFirst] = useState(true);

  const handleFirst = () => {
    setFirst(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login - Signup flow */}

          <Route
            path="/"
            element={<Age first={first} handleFirst={handleFirst} />}
          />
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
          <Route path="/course" element={<Course />} />
          <Route path="/video" element={<Video />} />
          <Route path="/MoreLearning" element={<MoreLearning />} />
          <Route path="/community" element={<Community />} />

          {/* Quiz flow */}
             <Route path="/hello" element={<Hello />} />
             <Route path="/Exam" element={<Exam />} />
             <Route path="/Result" element={<Result />} />
             <Route path="/Level" element={<Level />} />
             <Route path="/Setting" element={<Setting />} />
      

          {/* Settings flow */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
