import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import easyImage from '../assets/images/easy.jpg';

const Login: React.FC<{ onLogin: (token: string) => void }> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = "sample-token"; // Replace with actual login logic and token retrieval
    onLogin(token);
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
            Safe, Secure, Fast, Reliable, and Easy to Use
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 bg-white">
          <h2 className="text-2xl font-bold mb-4">Welcome Back 👋</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="What is your e-mail?"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-[#8B5E3C]">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B5E3C] text-white py-2 px-4 rounded-md hover:bg-[#6E482C]"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col items-center justify-center mt-4">
            <span className="text-sm mb-2">Or sign in with</span>
            <div className="flex">
              <button
                className="flex items-center justify-center mx-2 bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                aria-label="Sign in with Google"
              >
                <FcGoogle size={24} />
                <span className="ml-2 text-sm">Google</span>
              </button>
              <button
                className="flex items-center justify-center mx-2 bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                aria-label="Sign in with Facebook"
              >
                <FaFacebook size={24} color="#1877F2" />
                <span className="ml-2 text-sm">Facebook</span>
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-[#8B5E3C]">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
