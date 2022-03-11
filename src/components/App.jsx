import React from "react";
import { Link } from "react-router-dom";
function App() {
  
  return (
    <div className="container">
      <h1>HELLO</h1>
      <h2>Welcome to my homepage</h2>
      <Link to="/about"><button className="link">About me</button></Link>
      <Link to="/clock"><button className="link">The Clock</button></Link>  
      <Link to="/counter"><button className="link">The Counter</button></Link>

    </div>
  );
}

export default App;
