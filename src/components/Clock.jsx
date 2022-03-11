import React, { useState} from "react";
import { Link } from "react-router-dom";

function Clock() {
  const title = "THE CLOCK";
  const [time, setTime] = useState(title);
  
  function currentTime() {

      function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
      }
      setInterval(updateTime, 1000);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>GET TIME</button>
      <Link to="/"><button className="link">BACK</button></Link>
    </div>
  );
}

export default Clock;
