import React from "react";
import { FaMoneyBillWave, FaChartPie, FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js in React
import "../styles/dashboard.css"; // Optional if using custom styles

const DashboardContent: React.FC = () => {
  // Dummy data for financial summary cards
  const financialData = [
    { title: "Total Balance", amount: "$12,450", icon: <FaWallet />, bgColor: "bg-blue-500" },
    { title: "Income", amount: "$8,200", icon: <FaArrowUp />, bgColor: "bg-green-500" },
    { title: "Expenses", amount: "$5,600", icon: <FaArrowDown />, bgColor: "bg-red-500" },
    { title: "Savings", amount: "$2,850", icon: <FaMoneyBillWave />, bgColor: "bg-yellow-500" },
  ];

  // Data for the charts
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: [500, 800, 1200, 700, 900, 1100],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const doughnutData = {
    labels: ["Rent", "Food", "Transport", "Entertainment", "Others"],
    datasets: [
      {
        data: [800, 600, 300, 200, 400],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Greeting Section */}
      <h1 className="text-2xl font-bold text-gray-700">Welcome Back, User! 👋</h1>
      <p className="text-gray-500">Here’s your financial overview for this month.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {financialData.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg shadow-md ${item.bgColor} text-white`}>
            <div className="flex items-center justify-between">
              <span className="text-xl">{item.icon}</span>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="text-2xl font-bold mt-2">{item.amount}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Expenses</h3>
          <Bar data={barData} />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Expense Breakdown</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
