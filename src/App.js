import "./App.css";
import React from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <title>Wied Enterprise</title>
      <div className="main-container">
        <div className="main-content"></div>
        <Content />
        <NavBar />
      </div>
    </>
  );
}
export default App;
