import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [count, setCount] = useState(3)
  const [color, setColor] = useState("red")
  return (
    <div className="max-w-[960px] min-h-screen mx-auto border-2 border-red-500 flex flex-col">
      <Header count={count} color={color} />
      <Main count={count} setCount={setCount} 
      color={color} setColor={setColor}/>
      <Footer color={color} count={count} />
    </div>
  );
}

export default App;
