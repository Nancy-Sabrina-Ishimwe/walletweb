import React from "react";

interface TransactionProps {
  category: string;
  amount: string;
  icon: string;
}

const Transaction: React.FC<TransactionProps> = ({ category, amount, icon }) => (
  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow">
    <div className="flex items-center gap-4">
      <img src={icon} alt={category} className="w-8 h-8" />
      <span className="text-lg">{category}</span>
    </div>
    <span className="font-bold">${amount}</span>
  </div>
);

const LatestTransactions: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
    <h2 className="text-xl font-bold">Latest Transaction</h2>
    <Transaction category="Food" amount="25.00" icon="/icons/food.svg" />
    <Transaction category="Transport" amount="25.00" icon="/icons/transport.svg" />
    <button className="text-blue-500 mt-4">See more</button>
  </div>
);

export default LatestTransactions;
