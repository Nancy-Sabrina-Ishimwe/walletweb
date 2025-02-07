import React from "react";
import { X, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AddBankCardProps {
  onClose: () => void;
}

const AddBankCard: React.FC<AddBankCardProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const cardOptions = [
    { id: 1, name: "Debits and Credits Cards", route: "/add-debit-credit-card" },
    { id: 2, name: "Mobile Money", route: "/mobile-money"},
    { id: 3, name: "Money in Hands", route: "/money-in-hand" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={24} />
        </button>
        
        {/* Header */}
        <h2 className="text-xl font-semibold text-center">Add to Wallet</h2>
        <p className="text-center text-gray-600 mb-4">Cards and passes you use every day</p>
        
        {/* Card Options */}
        <div>
          <h3 className="font-semibold mb-2">Available Cards</h3>
          <div className="space-y-2">
            {cardOptions.map((card) => (
              <button
                key={card.id}
                onClick={() => {
                  if (card.route) {
                    navigate(card.route);
                  }
                }}
                className="flex items-center justify-between bg-gray-200 p-3 w-full rounded-md hover:bg-gray-300 transition"
              >
                <div className="flex items-center space-x-2">
                  <CreditCard size={20} />
                  <span>{card.name}</span>
                </div>
                <span>&gt;</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBankCard;
