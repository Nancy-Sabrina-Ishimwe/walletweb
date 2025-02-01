import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ToDo = () => {
  const [category, setCategory] = useState("");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState(new Date());
  const [priorTasks, setPriorTasks] = useState<{ name: string; amount: string; done: boolean }[]>([
    { name: "Work Transport", amount: "50", done: false },
    { name: "Donation Money", amount: "100", done: false },
  ]);
  const [todoItems, setTodoItems] = useState<{ name: string; amount: string; done: boolean }[]>([]);

  const handleAddItem = () => {
    if (category && money) {
      setTodoItems([
        ...todoItems,
        { name: category, amount: money, done: false }
      ]);
      setCategory("");
      setMoney("");
    }
  };

  const handleAddPriorTask = () => {
    if (category && money) {
      setPriorTasks([
        ...priorTasks,
        { name: category, amount: money, done: false }
      ]);
      setCategory("");
      setMoney("");
    }
  };

  const handleToggleDone = (index: number, isPriorTask: boolean) => {
    if (isPriorTask) {
      const updatedTasks = [...priorTasks];
      updatedTasks[index].done = !updatedTasks[index].done;
      setPriorTasks(updatedTasks);
    } else {
      const updatedItems = [...todoItems];
      updatedItems[index].done = !updatedItems[index].done;
      setTodoItems(updatedItems);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded p-2 mb-4"
          >
            <option value="">Select a prior task</option>
            {priorTasks.map((task, index) => (
              <option key={index} value={task.name}>
                {task.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter a new category"
            className="w-full border rounded p-2 mb-4"
          />
          <input
            type="number"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            placeholder="Money for task"
            className="w-full border rounded p-2 mb-4"
          />
          <button
            onClick={handleAddPriorTask}
            className="bg-gray-200 px-4 py-2 rounded mb-4"
          >
            Add to Prior Tasks
          </button>
        </div>

        {/* Calendar Div with Reduced Size */}
        {/* <div className="p-4 bg-white rounded-lg shadow" style={{ width: "600px", height: "400px" }}> */}
          <Calendar onChange={setDate} value={date} />
        {/* </div> */}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Add a task"
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          placeholder="Money for task"
          className="w-full border rounded p-2"
        />
        <button
          onClick={handleAddItem}
          className="bg-yellow-400 text-white px-6 py-2 rounded shadow hover:bg-yellow-500"
        >
          ADD
        </button>
      </div>

      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-bold">Prior Tasks</h2>
        {priorTasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border rounded shadow bg-yellow-100"
          >
            <div
              className={`w-6 h-6 rounded-full border border-gray-300 ${task.done ? 'bg-green-500' : ''}`}
              onClick={() => handleToggleDone(index, true)}
            ></div>
            <div className="flex-1">
              <span className={task.done ? 'line-through' : ''}>{task.name}</span>
              <span className="ml-4 text-gray-500">${task.amount}</span>
            </div>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggleDone(index, true)}
            />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">To-Do Items</h2>
        {todoItems.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add your first task!</p>
        ) : (
          todoItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded shadow"
            >
              <div
                className={`w-6 h-6 rounded-full border border-gray-300 ${item.done ? 'bg-green-500' : ''}`}
                onClick={() => handleToggleDone(index, false)}
              ></div>
              <div className="flex-1">
                <span className={item.done ? 'line-through' : ''}>{item.name}</span>
                <span className="ml-4 text-gray-500">${item.amount}</span>
              </div>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => handleToggleDone(index, false)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDo;
