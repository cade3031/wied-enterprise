import React from "react";
import "./NavBar.css";
import logo from "./airborne-innovations-logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <button
        onClick={() => (window.location.href = "https://wiedenterprise.com")}
      >
        Home
      </button>
      <button
        onClick={() =>
          (window.location.href = "https://wiedenterprise.com/about")
        }
      >
        About
      </button>
      <img src={logo} alt="Airborne Innovations Logo" height="123"></img>
      <button
        onClick={() =>
          (window.location.href = "https://wiedenterprise.com/services")
        }
      >
        Services
      </button>
      <button
        onClick={() =>
          (window.location.href = "https://wiedenterprise.com/contact")
        }
      >
        Contact
      </button>
    </div>
  );
}

export default NavBar;
