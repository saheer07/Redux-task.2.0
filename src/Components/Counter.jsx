

function Counter({count, setCount}) {
    
    return (
        
      <div className="counter">
        <h2>Counter</h2>
        <h3>The count is - {count}</h3>
        <button onClick={()=>setCount(count +1)}>Increase</button>
        <button onClick={()=> setCount(count > 0 ? count -1 : 0)}>Decrease</button>
      </div>
    );
  }
  
  export default Counter;
  