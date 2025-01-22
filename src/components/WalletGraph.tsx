import React from "react";
import { Pie } from "react-chartjs-2";

interface WalletGraphProps {
  transactions: { source: string; amount: number }[];
}

const WalletGraph: React.FC<WalletGraphProps> = ({ transactions }) => {
  // Group spending by source
  const spendingBySource = transactions.reduce((acc, txn) => {
    acc[txn.source] = (acc[txn.source] || 0) + txn.amount;
    return acc;
  }, {} as Record<string, number>);

  // Prepare data for the Pie chart
  const chartData = {
    labels: Object.keys(spendingBySource),
    datasets: [
      {
        data: Object.values(spendingBySource),
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
        hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#64B5F6"],
      },
    ],
  };

  const totalSpending = Object.values(spendingBySource).reduce(
    (sum, amount) => sum + amount,
    0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">My Wallets So Far</h2>
      <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
        {/* Pie Chart */}
        <Pie data={chartData} />
      </div>
      <div className="mt-6">
        {/* Spending Summary */}
        <h3 className="text-lg font-semibold mb-2">Spending Breakdown:</h3>
        <ul className="text-sm">
          {Object.entries(spendingBySource).map(([source, amount]) => (
            <li key={source} className="flex justify-between mb-1">
              <span>{source}</span>
              <span>${amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-right mt-4 text-lg font-bold">
        Total: ${totalSpending.toFixed(2)}
      </div>
    </div>
  );
};

export default WalletGraph;
