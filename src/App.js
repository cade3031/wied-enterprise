import "./App.css";
import React from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import ParticlesComponent from "./components/Particles";

function App() {
  return (
    <>
      <title>Wied Enterprise</title>
      <div className="main-container">
        <div className="main-content"></div>
        <Content />
        <NavBar />
        <ParticlesComponent id="particles" />
      </div>
    </>
  );
}
export default App;
