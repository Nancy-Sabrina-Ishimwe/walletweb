import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import ReportCard from '../components/Reportcard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Report: React.FC = () => {
  // Sample data for the charts
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Income',
        data: [1200, 1500, 1700, 1800],
        backgroundColor: '#F9623E',
      },
      {
        label: 'Expenses',
        data: [800, 1000, 1200, 1100],
        backgroundColor: '#9B775E',
      },
    ],
  };

  const doughnutData = {
    labels: ['Savings', 'Expenses', 'Investments'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#9B775E', '#F9623E', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Daily Income',
        data: [200, 300, 250, 400, 350, 500, 450],
        borderColor: '#FFC404',
        fill: false,
      },
      {
        label: 'Daily Expenses',
        data: [150, 200, 180, 300, 250, 350, 320],
        borderColor: '#9B775E',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <main className="p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-6">Find your Wallet Performance</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bar Chart */}
            <ReportCard
              title="Your Cash in hands money Report"
              content={
                <Bar
                  key={`bar-chart-${Math.random()}`} // Ensures a unique canvas
                  data={barData}
                  options={chartOptions}
                  width={250}
                  height={250}
                />
              }
            />

            {/* Line Chart */}
            <ReportCard
              title="Your Money on Card"
              content={
                <Line
                  key={`line-chart-${Math.random()}`} // Ensures a unique canvas
                  data={lineData}
                  options={chartOptions}
                  width={250}
                  height={250}
                />
              }
            />

            {/* Doughnut Chart */}
            <ReportCard
              title="Your Momo Report"
              content={
                <Doughnut
                  key={`doughnut-chart-${Math.random()}`} // Ensures a unique canvas
                  data={doughnutData}
                  options={chartOptions}
                  width={250}
                  height={250}
                />
              }
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Report;
