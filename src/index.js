import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import App from "./components/App";
import Clock from "./components/Clock";
import Counter from "./components/Counter";


ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={ <App />}/> 
        <Route path="/about" element={ <About />}/>
        <Route path="/clock" element={ <Clock />}/>
        <Route path="/counter" element={ <Counter />}/>
    </Routes>
   
</BrowserRouter>
, document.getElementById("root"));
