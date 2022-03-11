import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function About() {
  
    return (
      <div className="container">
      <h1>ABOUT ME</h1>
      <Card
        name={"Abdullahi Mohamed Ibrahim "}
        img={"https://pbs.twimg.com/profile_images/1495497329788469251/bhSzt1do_400x400.jpg"}
        tel={"0712345678"}
        email={"pahittat123@email.se"} />
        <Link to="/"><button className="link">BACK</button></Link>
  
      </div>
    );
  }
  
  export default About;
  