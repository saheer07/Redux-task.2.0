import Counter from "./Counter";
import Aside from "./Aside";

function Main({ count, setCount, color, setColor }) {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-[2fr_1fr] border-2 border-blue-500 m-5 p-4 gap-4 rounded-lg shadow-md">
      <Counter count={count} setCount={setCount} />
      <Aside color={color} setColor={setColor} />
    </div>
  );
}

export default Main;
