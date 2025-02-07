import React, { useState } from "react";
import CardsOverview from "../components/Cardsoverview";
import LatestTransactions from "../components/LatestTransaction";
import WalletGraph from "../components/WalletGraph";
import Todo from "../components/Todo";
import AddBankCard from "../components/AddBankCard";
import { useLocation } from "react-router-dom";

const mockTransactions = [
  { id: 1, category: "Groceries", amount: 50, source: "Visa Card", date: "2025-01-20" },
  { id: 2, category: "Transport", amount: 20, source: "Mobile Money", date: "2025-01-21" },
  { id: 3, category: "Dining", amount: 30, source: "Cash", date: "2025-01-22" },
  { id: 4, category: "Shopping", amount: 100, source: "Visa Card", date: "2025-01-23" },
];

const TransactionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAddBankCard, setShowAddBankCard] = useState(false);
  const [savedCards, setSavedCards] = useState<{ cardholderName: string; cardNumber: string; expiryDate: string }[]>([]);

  const location = useLocation();
  
  // Check if new card details are passed from EnterTheCodeManually
  React.useEffect(() => {
    if (location.state?.newCard) {
      setSavedCards((prevCards) => [...prevCards, location.state.newCard]);
    }
  }, [location.state]);

  // Function to delete a saved card
  const handleDeleteCard = (index: number) => {
    setSavedCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">See your Cards</h1>
        <input type="text" placeholder="🔍 Search" className="border rounded-md px-4 py-2 w-64" />
      </header>

      {/* Button to Open AddBankCard Modal */}
      <button onClick={() => setShowAddBankCard(true)} className="mb-4 px-4 py-2 bg-[#8B5E3C] text-white rounded">
        + Add Bank Card
      </button>

      {/* Render AddBankCard Modal when Show */}
      {showAddBankCard && <AddBankCard onClose={() => setShowAddBankCard(false)} />}

      {/* Display Saved Cards */}
      {savedCards.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Your Saved Cards</h2>
          <ul className="space-y-2">
            {savedCards.map((card, index) => (
              <li key={index} className="p-3 bg-[#4682B4] shadow rounded-md flex justify-between items-center">
                <div>
                  <p><strong>Cardholder:</strong> {card.cardholderName}</p>
                  <p><strong>Card Number:</strong> **** **** **** {card.cardNumber.slice(-4)}</p>
                  <p><strong>Expiry Date:</strong> {card.expiryDate}</p>
                </div>
                <button 
                  onClick={() => handleDeleteCard(index)}
                  className="ml-4 px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

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

          <LatestTransactions transactions={mockTransactions} selectedCategory={selectedCategory} />
        </div>

        {/* Pass transactions to WalletGraph */}
        <WalletGraph transactions={mockTransactions} />
        <Todo />
      </div>
    </div>
  );
};

export default TransactionPage;
