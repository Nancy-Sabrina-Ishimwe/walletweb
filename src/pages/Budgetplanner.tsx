import React, { useState } from "react";

const BudgetPlanner: React.FC = () => {
  // State for tracking the user inputs
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [customCategory, setCustomCategory] = useState("");
  const [moneyToUse, setMoneyToUse] = useState(0);
  const [moneyAvailable, setMoneyAvailable] = useState(0);
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([
    "Groceries",
    "Entertainment",
    "Bills",
    "Savings",
  ]);

  // Function to add a custom category
  const handleAddCategory = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && customCategory.trim() !== "") {
      if (!categories.includes(customCategory.trim())) {
        setCategories([...categories, customCategory.trim()]);
      }
      setCustomCategory(""); // Clear the input field after adding
    }
  };

  // Function to handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((cat) => cat !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log({
      selectedCategories,
      moneyToUse,
      moneyAvailable,
      date,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Add New Task */}
      <div className="flex justify-between items-center bg-white p-4 rounded-md shadow">
        <button 
          className="bg-brown-700 text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          New Task +
        </button>
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="font-semibold">Category:</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <label key={index} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="form-checkbox"
                />
                {cat}
              </label>
            ))}
          </div>
          <input
            type="text"
            placeholder="Add custom category (press Enter)"
            className="border px-2 py-1 rounded-md"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            onKeyDown={handleAddCategory} // Listen for Enter key
          />
        </div>
      </div>

      {/* Budget Input Section */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 bg-white p-4 rounded-md shadow">
          <h2 className="font-bold mb-2">Budget Details</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="moneyAvailable" className="block font-semibold">Money Available:</label>
              <input
                type="number"
                id="moneyAvailable"
                value={moneyAvailable}
                onChange={(e) => setMoneyAvailable(Number(e.target.value))}
                className="border px-2 py-1 rounded-md w-full"
                placeholder="$500.00"
              />
            </div>
            <div>
              <label htmlFor="moneyToUse" className="block font-semibold">Money to Use:</label>
              <input
                type="number"
                id="moneyToUse"
                value={moneyToUse}
                onChange={(e) => setMoneyToUse(Number(e.target.value))}
                className="border px-2 py-1 rounded-md w-full"
                placeholder="$200.00"
              />
            </div>
            <div>
              <label htmlFor="date" className="block font-semibold">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Budget To Use Section */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 bg-white p-4 rounded-md shadow">
          <h2 className="font-bold mb-2">Budget To Use</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center border p-4 rounded-md shadow">
              <span className="text-sm">Money to Use</span>
              <span className="text-xl font-bold">${moneyToUse}</span>
            </div>
            <div className="flex flex-col items-center border p-4 rounded-md shadow">
              <span className="text-sm">Money Available</span>
              <span className="text-xl font-bold">${moneyAvailable}</span>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
