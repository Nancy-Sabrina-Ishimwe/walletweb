import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/ericlogo.png"; // Replace with your actual logo path.

const Sidebar: React.FC<{ onSignOut: () => void }> = ({ onSignOut }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const menuItems = [
    { label: "Dashboard", icon: "🏠", path: "/" },
    { label: "Budget Planner", icon: "📊", path: "/budgetplanner" },
    { label: "Transaction", icon: "💸", path: "/transactionpage" },
    { label: "Reports", icon: "📄", path: "/report" },
    { label: "Payment", icon: "💳", path: "/payment" }, 
    { label: "To-Do", icon: "✅", path: "/todo" },
  ];

  return (
    <div className="bg-[#8B5E3C] text-white h-screen p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="logo mb-6 text-center">
          <img src={logo} alt="Eric's Wallet Logo" className="w-16 h-16 mx-auto rounded-full" />
          <h1 className="font-bold text-lg mt-2">Eric's Wallet</h1>
        </div>
        <nav>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-[#6E482C] ${
                  isActive ? "bg-[#6E482C] font-bold" : ""
                }`
              }
            >
              <span className="icon mr-2">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-center py-2 mb-4 text-white bg-[#6E482C] rounded-lg hover:bg-[#55341C]"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Sign Out Button */}
        <button
          onClick={onSignOut}
          className="w-full flex items-center justify-center py-2 text-white bg-brown-600 rounded-lg hover:bg-gray-400"
        >
          🚪 Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
