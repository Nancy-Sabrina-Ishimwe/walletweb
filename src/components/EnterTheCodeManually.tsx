import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterTheCodeManually: React.FC = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all fields.");
      return;
    }

    const newCard = { cardholderName, cardNumber, expiryDate };

    navigate("/transactionpage", { state: { newCard } });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
        <button onClick={() => navigate(-1)} className="absolute top-2 right-2 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4">Enter Card Details</h2>

        {/* Cardholder's Name */}
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="border p-2 w-full rounded mb-2"
        />

        {/* Card Number */}
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border p-2 w-full rounded mb-2"
        />

        {/* Expiry Date */}
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="border p-2 w-full rounded mb-2"
        />

        {/* CVV with Tooltip */}
        <div className="relative">
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <span className="text-sm text-gray-500 block mt-1">
            The CVV (Card Verification Value) is a 3-digit number on the back of your card.
          </span>
        </div>

        {/* Save Button */}
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Save Card
        </button>
      </div>
    </div>
  );
};

export default EnterTheCodeManually;
