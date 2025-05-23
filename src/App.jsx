import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [count, setCount] = useState(3)
  return (
    <div className="App">
      <Header />
      <Main count={count} setCount={setCount} />
      <Footer />
    </div>
  );
}

export default App;
