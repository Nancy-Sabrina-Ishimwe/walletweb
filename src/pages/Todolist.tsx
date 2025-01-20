import React, { useState } from "react";

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
          className="border rounded-md p-2 flex-grow"
        />
        <button
          onClick={addTask}
          className="bg-yellow-500 text-white p-2 rounded-md"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-2 border rounded-md"
          >
            <input type="checkbox" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
