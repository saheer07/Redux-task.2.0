function Counter({ count, setCount }) {
    return (
      <div className="border-2 border-green-500 p-4 rounded-md shadow-sm flex flex-col items-start gap-3">
        <h2 className="text-lg font-semibold">Counter</h2>
        <h3>The count is - {count}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increase
          </button>
          <button
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
  
  export default Counter;
  