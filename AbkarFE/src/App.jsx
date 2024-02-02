import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login - Signup flow */}

          {/* Home flow */}

          <Route path="/" element={<Home />} />

          {/* Quiz flow */}

          {/* Settings flow */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
