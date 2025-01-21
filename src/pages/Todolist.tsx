import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <input
          type="text"
          placeholder="🔍 Search"
          className="border rounded-md px-4 py-2 w-64"
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-6">
        <div className="bg-white p-4 rounded-md shadow flex-1">
          <h2 className="font-bold mb-2">Category</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span>Choose when to select where you like spending:</span>
              <button className="bg-brown-700 text-white px-4 py-2 rounded-md">
                Today
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Transaction done with:</span>
              <button className="bg-gray-200 px-4 py-2 rounded-md">Cards</button>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white p-4 rounded-md shadow w-64">
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

      {/* Add New Task */}
      <div className="flex gap-4 items-center bg-white p-4 rounded-md shadow">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-1 border px-4 py-2 rounded-md"
        />
        <button
          onClick={addTask}
          className="bg-yellow-500 text-white px-6 py-2 rounded-md"
        >
          ADD
        </button>
      </div>

      {/* Task List */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="font-bold mb-4">Tasks</h2>
        {tasks.length > 0 ? (
          <ul className="list-none flex flex-col gap-4">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
