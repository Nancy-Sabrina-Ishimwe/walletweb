import React from "react";

const WalletGraph: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">My wallets so far</h2>
    <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
      {/* Placeholder for the graph */}
      <span>Graph Placeholder</span>
    </div>
    <div className="text-right mt-4 text-lg font-bold">$3000</div>
  </div>
);

export default WalletGraph;
