import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateNewPassword from './pages/CreateNewPassword';
import VerifyCode from './pages/VerifyCode';
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifyCode" element={<VerifyCode />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}


      </Routes>
    </Router>
  );
};

export default App;
