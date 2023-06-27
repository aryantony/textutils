// import logo from "./logo.svg";
import "./App.css";
import Colors from "./components/Colors";
import Textadd from "./components/Textadd";
import React from "react";

function App() {
  document.body.style.backgroundColor = "#042743";
  return (
    <>
      <div className="body">
        <div className="navbar">
          <div className="nav_left">Convert Case</div>
          <div className="nav_right">
            <Colors />
          </div>
        </div>
        <Textadd />
      </div>
    </>
  );
}

export default App;
