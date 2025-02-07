import React, { useState, useEffect } from "react";

interface Transaction {
  id: number;
  type: "Mobile Money" | "Debit/Credit Card" | "Money in Hands";
  amount: number;
  date: string;
  description: string;
}

const PaymentPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [todoList, setTodoList] = useState<string[]>([
    "Check account balance",
    "Verify last transaction",
    "Transfer money to savings",
  ]);

  // Simulating fetching transaction data from storage or API
  useEffect(() => {
    const fetchedTransactions: Transaction[] = [
      { id: 1, type: "Mobile Money", amount: -50000, date: "2025-02-07", description: "Sent to John" },
      { id: 2, type: "Debit/Credit Card", amount: -100000, date: "2025-02-06", description: "Paid for groceries" },
      { id: 3, type: "Money in Hands", amount: 200000, date: "2025-02-05", description: "Cash deposit" },
      { id: 4, type: "Mobile Money", amount: 150000, date: "2025-02-04", description: "Received from work" },
    ];

    setTransactions(fetchedTransactions);

    // Calculate total balance
    const total = fetchedTransactions.reduce((sum, txn) => sum + txn.amount, 0);
    setTotalBalance(total);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-20">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold text-center mb-4">Payment Overview</h2>

      {/* Total Balance Display */}
      <div className="text-center text-xl font-bold text-green-600 mb-6">
        Total Balance: UGX {totalBalance.toLocaleString()}
      </div>

      {/* Transactions Table */}
      <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b">
                <td className="border p-2">{txn.date}</td>
                <td className="border p-2">{txn.type}</td>
                <td className="border p-2">{txn.description}</td>
                <td className={`border p-2 ${txn.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                  UGX {txn.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* To-Do List Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">To-Do List</h3>
      <ul className="list-disc pl-5">
        {todoList.map((task, index) => (
          <li key={index} className="mb-1 text-gray-700">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentPage;
