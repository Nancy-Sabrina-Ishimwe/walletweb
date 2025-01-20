import React, { useState } from 'react';

const VerifyCode: React.FC = () => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    console.log('Code verified:', code);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Almost done</h1>
        <p className="text-gray-600 mb-6 text-center">
          Please type the code we sent you in your email
        </p>
        <div className="mb-6 flex justify-center space-x-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
              onChange={(e) => setCode(code + e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Verify
        </button>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Can't access your email?{' '}
          <span className="text-blue-500 cursor-pointer">Contact support</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyCode;
