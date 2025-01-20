import React, { useState } from 'react';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset your password</h1>
        <p className="text-gray-600 mb-6 text-center">Please type the email to reset your password</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example.email@gmail.com"
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

export default ResetPassword;
