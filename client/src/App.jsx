import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/Dashboard"; // 🔥 Importer Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* 🔥 Ajoute Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
