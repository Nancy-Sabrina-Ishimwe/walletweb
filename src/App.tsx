import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateNewPassword from './pages/CreateNewPassword';
import VerifyCode from './pages/VerifyCode';
import ResetPassword from './pages/ResetPassword';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifyCode" element={<VerifyCode />} />


      </Routes>
    </Router>
  );
};

export default App;
