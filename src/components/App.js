import React, { useState } from "react";
import Clock from "./Clock";

function App() {
  const [count, setCount] = useState(0); //Destructured array.1st parameter = 1st index, 2nd param is function to call on it

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <Clock />
    </div>
  );
}

export default App;
