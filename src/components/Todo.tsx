import React, { useState } from "react";

const Todo: React.FC = () => {
  const [task, setTask] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">To-do</h2>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded-md px-4 py-2 w-full mb-4"
      />
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full">
        ADD
      </button>
    </div>
  );
};

export default Todo;
