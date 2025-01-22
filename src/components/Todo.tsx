import React, { useState } from "react";

interface Task {
  id: number;
  description: string;
  amount: number;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [amount, setAmount] = useState<number | "">("");

  const handleAddTask = () => {
    if (newTask.trim() && amount !== "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          description: newTask.trim(),
          amount: Number(amount),
          completed: false,
        },
      ]);
      setNewTask(""); // Clear the input field
      setAmount(""); // Clear the amount field
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalAmount = tasks.reduce((sum, task) => sum + task.amount, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tasks to Do</h2>

      {/* Input for Adding Tasks */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border rounded-md px-4 py-2 flex-grow mr-2"
        />
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          className="border rounded-md px-4 py-2 w-24 mr-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Display Tasks */}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center border-b py-2 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <div
              onClick={() => toggleTaskCompletion(task.id)}
              className="cursor-pointer flex-grow"
            >
              <span>{task.description}</span>
              <span className="block text-sm text-gray-500">
                Amount: ${task.amount.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:underline ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Total Spending */}
      {tasks.length > 0 && (
        <div className="text-right mt-4 font-bold">
          Total Spending: ${totalAmount.toFixed(2)}
        </div>
      )}

      {/* Message for No Tasks */}
      {tasks.length === 0 && (
        <p className="text-gray-500 mt-4">No tasks added yet.</p>
      )}
    </div>
  );
};

export default Todo;
