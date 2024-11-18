import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./component/About.js";
// IMPORTANT IMIPORT (DON'T BE RANDOM)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlaygroundMain from "./Playground/Playgroundmain.js";
import Input from "./Playground/Items/input/input.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/About" Component={Input} />
          <Route path="/Playground" Component={PlaygroundMain} />
        </Routes>
      </Router>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
