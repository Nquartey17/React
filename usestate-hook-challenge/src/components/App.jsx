import React, { useState } from "react";

function App() {
  setInterval(changeTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  console.log(time);

  function changeTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
