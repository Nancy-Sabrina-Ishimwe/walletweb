import React, { useState } from 'react';

const CreateNewPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Password successfully set');
    } else {
      console.error('Passwords do not match');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create a new password
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please type the email to reset your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter at least 8+ characters"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
              Confirm your new Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter at least 8+ characters"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B5E3C] text-white py-2 px-4 rounded-md hover:bg-[#6E482C]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;
