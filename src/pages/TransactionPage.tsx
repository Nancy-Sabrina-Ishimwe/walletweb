import React, { useState } from "react";
import CardsOverview from "../components/Cardsoverview";
import LatestTransactions from "../components/LatestTransaction";
import WalletGraph from "../components/WalletGraph";
import Todo from "../components/Todo";

const mockTransactions = [
  { id: 1, category: "Groceries", amount: 50, source: "Visa Card", date: "2025-01-20" },
  { id: 2, category: "Transport", amount: 20, source: "Mobile Money", date: "2025-01-21" },
  { id: 3, category: "Dining", amount: 30, source: "Cash", date: "2025-01-22" },
  { id: 4, category: "Shopping", amount: 100, source: "Visa Card", date: "2025-01-23" },
];

const TransactionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">See your Cards</h1>
        <input
          type="text"
          placeholder="🔍 Search"
          className="border rounded-md px-4 py-2 w-64"
        />
      </header>

      {/* Cards and Overview */}
      <CardsOverview />

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div>
          <select
            className="border px-4 py-2 rounded-md w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Transport">Transport</option>
            <option value="Dining">Dining</option>
            <option value="Shopping">Shopping</option>
          </select>

          <LatestTransactions
            transactions={mockTransactions}
            selectedCategory={selectedCategory}
          />
        </div>

        {/* Pass transactions to WalletGraph */}
        <WalletGraph transactions={mockTransactions} />
        <Todo />
      </div>
    </div>
  );
};

export default TransactionPage;
