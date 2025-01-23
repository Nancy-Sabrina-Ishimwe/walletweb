import React, { useState } from "react";

interface DashboardCardProps {
  title: string;
  balance: number;
  icon: string;
  onAddMoney: (amount: number) => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, balance, icon, onAddMoney }) => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-xl">{icon}</span>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <p className="text-gray-500">Balance: ${balance}</p>
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Add amount"
          className="border rounded-lg px-2 py-1 w-full mb-2"
        />
        <button
          onClick={() => onAddMoney(amount)}
          className="bg-white text-black px-4 py-2 rounded-lg w-full"
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
