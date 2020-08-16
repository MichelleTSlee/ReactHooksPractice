import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now); //Destructured array.1st parameter = is value we passed into useState, 2nd param is function to call on it

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Show Time</button>
    </div>
  );
}

export default App;
