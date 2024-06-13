import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Agent from "./pages/Agent.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/agent/:id" element={<Agent />} />
        <Route exact path="/task-management" element={<TaskManagement />} />
      </Routes>
    </Router>
  );
}

export default App;