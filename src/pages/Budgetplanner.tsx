import React from "react";

const BudgetPlanner: React.FC = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Budget Planner</h1>
        <input
          type="text"
          placeholder="🔍 Search"
          className="border rounded-md px-4 py-2 w-64"
        />
      </div>

      {/* Add New Task */}
      <div className="flex justify-between items-center bg-white p-4 rounded-md shadow">
        <button className="bg-brown-700 text-white px-4 py-2 rounded-md">New Task +</button>
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="font-semibold">Category:</label>
          <select id="category" className="border px-2 py-1 rounded-md">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* Budget To Use Section */}
      <div className="flex flex-wrap gap-4">
        {/* Left Column */}
        <div className="flex-1 bg-white p-4 rounded-md shadow">
          <h2 className="font-bold mb-2">Budget To Use</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center border p-4 rounded-md shadow">
              <span className="text-sm">Money to Use</span>
              <span className="text-xl font-bold">$500.00</span>
            </div>
            <div className="flex flex-col items-center border p-4 rounded-md shadow">
              <span className="text-sm">Money Used So Far</span>
              <span className="text-xl font-bold">$500.00</span>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="w-64 bg-white p-4 rounded-md shadow">
          <h2 className="font-bold mb-2">Calendar</h2>
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
              </tr>
              {/* Continue rows... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
