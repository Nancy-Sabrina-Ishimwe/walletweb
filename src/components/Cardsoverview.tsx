import React from "react";

interface CardProps {
  cardNumber: string;
  balance: string;
  status: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ cardNumber, balance, status, bgColor }) => (
  <div
    className={`p-4 rounded-lg shadow-md text-white flex flex-col gap-2`}
    style={{ backgroundColor: bgColor }}
  >
    <span className="text-sm">{cardNumber}</span>
    <span className="text-lg font-bold">${balance}</span>
    <span className="text-sm uppercase">{status}</span>
  </div>
);

const CardsOverview: React.FC = () => (
  <div className="flex gap-6 items-start">
    <Card
      cardNumber="**** **** **** 1234"
      balance="2000.00"
      status="MasterCard"
      bgColor="#A0522D"
    />
    <Card
      cardNumber="**** **** **** 5678"
      balance="3000.00"
      status="Visa"
      bgColor="#228B22"
    />
    <Card
      cardNumber="**** **** **** 9101"
      balance="4000.00"
      status="Equity Card"
      bgColor="#4682B4"
    />
    <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
      +
    </button>
  </div>
);

export default CardsOverview;
