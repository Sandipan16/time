import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const nextTime = new Date().toLocaleTimeString();
    setTime(nextTime);
  }
  const [t, setT] = useState(now);
  function showTime() {
    setT(time);
  }

  setInterval(updateTime, 1000);
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
      <p>{t}</p>
    </div>
  );
}
