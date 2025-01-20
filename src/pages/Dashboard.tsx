import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardCard from "../components/DashboardCard";
import ProgressChart from "../components/ProgressChart";
// import Header from "../components/Header"; 

// Register the required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [chartData] = useState<any>({
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Cards",
        data: [500, 400, 300, 200, 100],
        backgroundColor: "#8B5E3C",
      },
      {
        label: "Savings",
        data: [2000, 2100, 2200, 2300, 2400],
        backgroundColor: "#000000",
      },
      {
        label: "Mobile Money",
        data: [500, 400, 300, 200, 100],
        backgroundColor: "#FFC404",
      },
      {
        label: "Savings",
        data: [2000, 2100, 2200, 2300, 2400],
        backgroundColor: "#F9623E",
      },
    ],
  });

  const doughnutData = {
    labels: ["Income", "Expenses", "Savings", "Credits"],
    datasets: [
      {
        label: "Budget Distribution",
        data: [40, 30, 20, 10],
        backgroundColor: ["#8B5E3C", "#000000", "#FFC404", "#F9623E"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {/* Add Header at the top */}
      {/* <Header /> */}

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Cash" balance={500} icon="💵" />
          <DashboardCard title="Mobile Money" balance={1000} icon="📱" />
          <DashboardCard title="Savings" balance={2000} icon="💰" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Bar Chart */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-lg font-bold mb-2">Funds Progress Overview</h2>
            <ProgressChart data={chartData} />
          </div>

          {/* Doughnut Chart (Smaller) */}
          <div className="col-span-2 lg:col-span-1 flex justify-center">
            <div className="w-90 h-90">
              <h2 className="text-lg font-bold mb-2 text-center">
                Report of your transactions
              </h2>
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
