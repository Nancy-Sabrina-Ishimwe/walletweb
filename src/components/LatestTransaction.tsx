import React from "react";

interface Transaction {
  id: number;
  category: string;
  amount: number;
  source: string;
  date: string;
}

interface LatestTransactionsProps {
  transactions: Transaction[];
  selectedCategory: string;
}

const LatestTransactions: React.FC<LatestTransactionsProps> = ({
  transactions,
  selectedCategory,
}) => {
  // Filter transactions by the selected category
  const filteredTransactions = selectedCategory
    ? transactions.filter((txn) => txn.category === selectedCategory)
    : transactions;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Latest Transactions</h2>
      <ul>
        {filteredTransactions.map((txn) => (
          <li
            key={txn.id}
            className="flex justify-between border-b py-2 last:border-b-0"
          >
            <div>
              <span className="block font-medium">{txn.category}</span>
              <span className="text-sm text-gray-500">{txn.date}</span>
            </div>
            <div>
              <span className="font-semibold">
                ${txn.amount.toFixed(2)}
              </span>
              <span className="block text-sm text-gray-500">{txn.source}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestTransactions;
