import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import easyImage from '../assets/images/easy.jpg'; 

const Signup: React.FC = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    console.log('Form data submitted:', formData);

    // Navigate to a confirmation page or login after successful signup
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-[#8B5E3C] flex flex-col justify-center items-center p-10">
          <img
            src={easyImage}
            alt="Eric Wallet pic"
            className="w-42 h-68 rounded-lg"
          />
          <h1 className="text-white text-3xl font-bold mt-4">
            Welcome to Eric Wallet
          </h1>
          <p className="text-white mt-2 text-center">
            Get started now and take full control of your digital payments.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 bg-white">
          <h2 className="text-2xl font-bold mb-4">Begin Your Journey 🎉</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Input first name"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Input last name"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example.email@gmail.com"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter at least 8+ characters"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B5E3C] text-white py-2 px-4 rounded-md hover:bg-[#6E482C]"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            Returning user?{' '}
            <Link to="/login" className="text-[#8B5E3C]">
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
