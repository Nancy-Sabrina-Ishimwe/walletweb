import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: "🏠", path: "/" },
    { label: "Budget Planner", icon: "📊", path: "/budget-planner" },
    { label: "Transaction", icon: "💸", path: "/transaction" },
    { label: "Reports", icon: "📄", path: "/reports" },
  ];

  return (
    <div className="bg-brown-700 text-white h-screen p-4 flex flex-col">
      <div className="logo mb-6 text-center font-bold text-lg">Eric's Wallet</div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-brown-600 ${
                isActive ? "bg-brown-600" : ""
              }`
            }
          >
            <span className="icon mr-2">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
