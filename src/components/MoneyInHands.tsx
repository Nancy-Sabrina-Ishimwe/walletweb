import React, { useState } from "react";

interface MoneyInHandProps {
  initialAmount: number;
}

const MoneyInHand: React.FC<MoneyInHandProps> = ({ initialAmount }) => {
  const [balance, setBalance] = useState<number>(initialAmount);
  const [amount, setAmount] = useState<string>("");

  // Function to add money
  const handleAddMoney = () => {
    const money = parseFloat(amount);
    if (!isNaN(money) && money > 0) {
      setBalance((prevBalance) => prevBalance + money);
      setAmount(""); // Reset input field
    }
  };

  // Function to decrease money (ensure balance doesn’t go negative)
  const handleRemoveMoney = () => {
    const money = parseFloat(amount);
    if (!isNaN(money) && money > 0 && balance - money >= 0) {
      setBalance((prevBalance) => prevBalance - money);
      setAmount(""); // Reset input field
    }
  };

  // Function to correct the balance manually
  const handleCorrectBalance = () => {
    const correctedAmount = parseFloat(amount);
    if (!isNaN(correctedAmount) && correctedAmount >= 0) {
      setBalance(correctedAmount);
      setAmount(""); // Reset input field
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center">Money in Hands</h2>
      <p className="text-gray-600 text-center mb-4">Manage your cash balance</p>

      {/* Current Balance Display */}
      <div className="text-center text-3xl font-bold text-green-600">
        UGX {balance.toLocaleString()}
      </div>

      {/* Input Section */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-green-300"
          placeholder="Enter amount in UGX"
        />
      </div>

      {/* Buttons for Actions */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleAddMoney}
          className="flex-1 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
        >
          Add Money
        </button>
        <button
          onClick={handleRemoveMoney}
          className="flex-1 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
        >
          Remove Money
        </button>
        <button
          onClick={handleCorrectBalance}
          className="flex-1 bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition"
        >
          Correct Balance
        </button>
      </div>
    </div>
  );
};

export default MoneyInHand;
