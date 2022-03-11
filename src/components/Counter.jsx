import React, { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h2 className="title">THE COUNTER</h2>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <Link to="/"><button className="link">BACK</button></Link>
    </div>
  );
}

export default Counter;