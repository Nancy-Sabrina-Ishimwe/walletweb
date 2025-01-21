import React from "react";
import CardsOverview from "../components/Cardsoverview";
import LatestTransactions from "../components/Latesttransaction";
import WalletGraph from "../components/WalletGraph";
import Todo from "../components/Todo";

const TransactionPage: React.FC = () => (
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
      <LatestTransactions />
      <WalletGraph />
      <Todo />
    </div>
  </div>
);

export default TransactionPage;
