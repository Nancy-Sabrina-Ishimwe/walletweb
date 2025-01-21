import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import VerifyCode from "./pages/VerifyCode";
import Dashboard from "./pages/Dashboard";
import BudgetPlanner from "./pages/Budgetplanner";
import TransactionPage from "./pages/Transactionpage";
import Report from "./pages/Report";
import Layout from "./components/Layout";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogin = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifycode" element={<VerifyCode />} />

        {/* Protected Routes */}
        {isLoggedIn && (
          <Route
            path="/dashboard"
            element={
              <Layout onLogout={handleLogout}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/budget-planner" element={<BudgetPlanner />} />
                  <Route path="/transaction" element={<TransactionPage />} />
                  <Route path="/report" element={<Report />} />
                </Routes>
              </Layout>
            }
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
