import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Dashboard from "./components/student/Dashboard";
import Login from "./components/guest/Login";

import About from "./components/guest/About";
import Course from "./components/guest/Course";
import UpdateStudent from "./components/student/UpdateStudent";

function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Route  */}
        <Route path="/" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
