import React, { useState } from "react";
import "./NavBar.css";
import logo from "./airborne-innovations-logo.png";

function NavBar() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState("");

  const togglePopup = (content) => {
    setPopUpContent(content);
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Airborne Innovations Logo" height="123"></img>

      <div className="Servicebtn">
        <button onClick={() => togglePopup("")}>Services</button>
      </div>

      <div className="Contactbtn">
        <button
          onClick={() =>
            togglePopup(
              "Linkedin: https://www.linkedin.com/in/cade/-wied-493228287 GitHub: https://github.com/cade3031/"
            )
          }
        >
          Contact{" "}
        </button>
      </div>

      <button onClick={() => togglePopup("")}>Projects</button>
      {showPopUp && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopUp(false)}>
              &times;
            </span>
            {popUpContent}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
