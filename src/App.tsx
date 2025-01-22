import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Dashboard from "./pages/Dashboard";
import BudgetPlanner from "./pages/Budgetplanner";
import TransactionPage from "./pages/TransactionPage";
import Report from "./pages/Report";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if token exists

  const handleLogin = (token: string) => {
    localStorage.setItem("authToken", token);
    window.location.href = "/"; // Redirect to dashboard after login
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login"; // Redirect to login after logout
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar  />

          {/* Sidebar and Main Content */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <Sidebar onSignOut={handleLogout} />

            {/* Main Content */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/budgetplanner" element={<BudgetPlanner />} />
                <Route path="/transactionpage" element={<TransactionPage />} />
                <Route path="/report" element={<Report />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
