import React, { useState, useEffect } from "react";

interface Transaction {
  id: number;
  amount: number;
  type: "Received" | "Sent";
  date: string;
  recipient?: string;
  sender?: string;
}

const MobileMoney: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Mock Data - Replace this with an API call later
    setBalance(150000); // Assume the user has 150,000 UGX

    setTransactions([
      { id: 1, amount: 50000, type: "Received", date: "2025-02-06", sender: "John Doe" },
      { id: 2, amount: 20000, type: "Sent", date: "2025-02-05", recipient: "Jane Smith" },
      { id: 3, amount: 100000, type: "Received", date: "2025-02-04", sender: "MTN Bonus" },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-20">
      {/* Mobile Money Balance */}
      <h2 className="text-2xl font-semibold text-center">MTN Mobile Money</h2>
      <p className="text-gray-600 text-center mb-4">Your current balance</p>
      <div className="text-center text-3xl font-bold text-green-600">UGX {balance.toLocaleString()}</div>

      {/* Recent Transactions */}
      <h3 className="text-lg font-semibold mt-6">Recent Transactions</h3>
      <div className="mt-2 space-y-2">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="p-3 border rounded-md flex justify-between items-center bg-gray-100">
            <div>
              <p className="font-medium">
                {transaction.type === "Received" ? `From: ${transaction.sender}` : `To: ${transaction.recipient}`}
              </p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <div className={`font-semibold ${transaction.type === "Received" ? "text-green-600" : "text-red-600"}`}>
              {transaction.type === "Received" ? "+" : "-"} UGX {transaction.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMoney;
