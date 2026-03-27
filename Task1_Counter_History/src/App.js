import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const handleReset = () => {
    setCount(0);
    setHistory([...history, 0]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[350px]">

        <h1 className="text-2xl font-bold text-center mb-6">
          Counter With History
        </h1>

        <h2 className="text-center text-4xl font-bold mb-6">
          {count}
        </h2>

        <div className="flex justify-center gap-3 mb-6">

          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Increment
          </button>

          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>

          <button
            onClick={handleReset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Reset
          </button>

        </div>

        <div className="border-t pt-4">

          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">History</h3>

            <button
              onClick={clearHistory}
              className="text-sm text-gray-500 hover:text-black"
            >
              Clear
            </button>
          </div>

          <ul className="max-h-32 overflow-y-auto space-y-1">
            {history.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 px-3 py-1 rounded text-center"
              >
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
}

export default App;