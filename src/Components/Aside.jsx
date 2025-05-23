import { useState } from "react";
import randomColor from "randomcolor";

function Aside() {
    const [color, setColor] = useState("red")
const newColor = randomColor()
    const changeColor = () => {
 setColor(newColor)
    }
    return (
      <div className="aside">
        <h2 style={{color:color}}> Aside</h2>
        <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }
  
  export default Aside;