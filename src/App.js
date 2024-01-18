import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/Login&Register/Login";
import Register from "./pages/Login&Register/Register";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";


function App() {
  return (
    <Router>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/admin/dashboard" element={<AdminDashboard></AdminDashboard>} />
      </Routes>
    </Router>
  );
}

export default App;
