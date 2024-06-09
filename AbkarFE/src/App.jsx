import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./components/login-signup/style/main.css";
import Teen from "./components/login-signup/Teen";
import LogIn from "./components/login-signup/LogIn";
import Age from "./components/login-signup/Age";
import Forgot from "./components/login-signup/Forgot";
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
import Layout from "./components/Dashboard/Layout";
import EditVideo from "./components/Dashboard/EditVideo";
import AddVideo from "./components/Dashboard/AddVideo";
import EditEssay from "./components/Dashboard/EditEssay";
import AddEssay from "./components/Dashboard/AddEssay";
import EditTest from "./components/Dashboard/EditTest";
import AddTest from "./components/Dashboard/AddTest";
import Answers from "./components/Quiz/Answers/Answers";

function App() {
  const [first, setFirst] = useState(true);

  const handleFirst = () => {
    setFirst(false);
  };

  return (
		<Router>
			<div className="App">
				<Routes>
					{/* Dashboard flow */}

					<Route element={<Layout />}>
						<Route path="videos" element={<EditVideo />} />
						<Route path="addVideo" element={<AddVideo />} />
						<Route path="essays" element={<EditEssay />} />
						<Route path="addEssay" element={<AddEssay />} />
						<Route path="tests" element={<EditTest />} />
						<Route path="addTest" element={<AddTest />} />
					</Route>
					{/* Login - Signup flow */}

					<Route
						path="/"
						element={<LogIn first={first} handleFirst={handleFirst} />}
					/>
					<Route path="/13-18" element={<Teen />} />
					<Route path="/age" element={<Age />} />
					<Route path="/password" element={<Forgot />} />
					<Route path="/reassign-password/:token" element={<Reassign />} />
					<Route path="/parents" element={<Parents />} />
					<Route path="/welcome" element={<Welcome />} />
					<Route path="/form" element={<FForm />} />

					{/* Home flow */}
					<Route path="/pageone" element={<PageOne />} />
					<Route path="/course" element={<Course />} />
					<Route path="/video/:id" element={<Video />} />
					<Route path="/MoreLearning" element={<MoreLearning />} />
					<Route path="/community" element={<Community />} />

					{/* Quiz & settings flow */}
					<Route path="/hello" element={<Hello />} />
					<Route path="/Exam" element={<Exam />} />
					<Route path="/Result/:percentage" element={<Result />} />
					<Route path="/Level" element={<Level />} />
					<Route path="/Setting" element={<Setting />} />
					<Route path="/Answers" element={<Answers />} />
	
				</Routes>
			</div>
		</Router>
	);
}

export default App;
