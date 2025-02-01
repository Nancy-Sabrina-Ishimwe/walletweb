import React, { useState } from "react";

const BudgetPlanner: React.FC = () => {
  const [moneyToUse, setMoneyToUse] = useState(500);
  const [moneyUsed, setMoneyUsed] = useState(200);
  const [budgetToDoMonth, setBudgetToDoMonth] = useState(1000);
  const [budgetUsedMonth, setBudgetUsedMonth] = useState(300);
  const [budgetSource, setBudgetSource] = useState("Bank Cards");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Balance for each budget source
  const [balances, setBalances] = useState({
    "Bank Cards": 1500,
    "Mobile Money": 500,
    "Cash in Hand": 200,
  });

  const handleAddMoney = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    const newAmount = prompt("Enter the amount to add:");
    if (newAmount) {
      const amount = parseFloat(newAmount);
      if (!isNaN(amount) && amount > 0) {
        setter((prev) => prev + amount);
      } else {
        alert("Please enter a valid number.");
      }
    }
  };

  const getDaysInMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendar = [];
    let dayCounter = 1;

    for (let week = 0; week < 6; week++) {
      let weekRow = [];
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < firstDay) || dayCounter > daysInMonth) {
          weekRow.push("");
        } else {
          weekRow.push(dayCounter);
          dayCounter++;
        }
      }
      calendar.push(weekRow);
    }
    return calendar;
  };

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <button className="bg-brown-700 text-[#6E482C] px-6 py-3 rounded-md self-start">New Tasks +</button>
      
      <div className="flex justify-between gap-6">
        <div className="bg-white p-4 rounded-md shadow-md w-1/2">
          <h2 className="font-bold mb-2">Budget To Use</h2>
          <div className="flex justify-between">
            <div className="bg-gray-100 p-4 rounded-md text-center w-40">
              <p className="text-sm">Money to use</p>
              <p className="text-xl font-bold">${moneyToUse}</p>
              <button className="bg-[#6E482C] text-white px-3 py-1 mt-2 rounded-md" onClick={() => handleAddMoney(setMoneyToUse)}>Add Amount</button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center w-40">
              <p className="text-sm">Money used so far</p>
              <p className="text-xl font-bold">${moneyUsed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md w-1/2">
          <h2 className="font-bold mb-2">Budget To Do Month</h2>
          <div className="flex justify-between">
            <div className="bg-gray-100 p-4 rounded-md text-center w-40">
              <p className="text-sm">Money to use</p>
              <p className="text-xl font-bold">${budgetToDoMonth}</p>
              <button className="bg-[#6E482C] text-white px-3 py-1 mt-2 rounded-md" onClick={() => handleAddMoney(setBudgetToDoMonth)}>Add Amount</button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center w-40">
              <p className="text-sm">Money used so far</p>
              <p className="text-xl font-bold">${budgetUsedMonth}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="bg-white p-4 rounded-md shadow-md w-1/2">
          <h2 className="text-lg font-semibold">Category</h2>
          <label className="block text-sm font-medium mt-4">Select Budget Source:</label>
          <select className="bg-gray-100 border rounded-md p-2 w-full mt-1" value={budgetSource} onChange={(e) => setBudgetSource(e.target.value)}>
            <option value="Bank Cards">Bank Cards</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="Cash in Hand">Cash in Hand</option>
          </select>
          <p className="mt-2 text-gray-700"><strong>Selected Source:</strong> {budgetSource}</p>
          <p className="mt-2 text-gray-700"><strong>Balance:</strong> ${balances[budgetSource]}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md w-1/2">
          <h2 className="font-bold mb-2">Calendar</h2>
          <div className="flex justify-between mb-2">
            <select className="bg-gray-100 border rounded-md p-2" value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
              {Array.from({ length: 11 }, (_, i) => 2020 + i).map((year) => <option key={year} value={year}>{year}</option>)}
            </select>
            <select className="bg-gray-100 border rounded-md p-2" value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => <option key={month} value={index}>{month}</option>)}
            </select>
          </div>
          <table className="w-full text-center">
            <thead>
              <tr>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <th key={day} className="px-2 py-1">{day}</th>)}</tr>
            </thead>
            <tbody>
              {getDaysInMonth(selectedYear, selectedMonth).map((week, i) => (
                <tr key={i}>
                  {week.map((date, j) => (
                    <td
                      key={j}
                      className={`p-2 ${date ? 'cursor-pointer' : ''}`}
                      onClick={() => date && handleDaySelect(date)}
                    >
                      {date}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {selectedDay && (
            <p className="mt-4 text-gray-700">
              <strong>Selected Day:</strong> {selectedDay}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
