import { FaHome, FaWallet, FaChartPie, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-brown-700 text-white p-5">
      <h2 className="text-2xl font-bold">Eric's Wallet</h2>
      <nav className="mt-5">
        <Link className="flex items-center gap-2 py-2" to="/">
          <FaHome /> Dashboard
        </Link>
        <Link className="flex items-center gap-2 py-2" to="/budget">
          <FaWallet /> Budget Planner
        </Link>
        <Link className="flex items-center gap-2 py-2" to="/reports">
          <FaChartPie /> Reports
        </Link>
        <Link className="flex items-center gap-2 py-2 mt-10" to="/logout">
          <FaSignOutAlt /> Sign Out
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
