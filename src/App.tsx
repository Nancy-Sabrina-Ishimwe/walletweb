import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateNewPassword from "./pages/CreateNewPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App: React.FC = () => {
  const [isLoggedIn] = useState(false); 

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifyCode" element={<VerifyCode />} />

        {/* Authenticated Routes */}
        {isLoggedIn && (
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
