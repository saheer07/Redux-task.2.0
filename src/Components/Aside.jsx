import randomColor from "randomcolor";

function Aside({ color, setColor }) {
  const changeColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  return (
    <div className="border-2 border-green-500 p-4 rounded-md shadow-sm flex flex-col gap-3 items-start">
      <h2 className="text-lg font-semibold" style={{ color }}>
        Aside
      </h2>
      <button
        onClick={changeColor}
        className="bg-purple-400 text-bold px-4 py-2 rounded hover:bg-purple-600" style={{color}}
      >
        Change Color
      </button>
    </div>
  );
}

export default Aside;
