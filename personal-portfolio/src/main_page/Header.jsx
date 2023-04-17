import React from "react";
import r_letter from "../assets/download.svg";

function Header() {
  return (
    <div className="header">
      <img src={r_letter} className="icon"></img>
      <div className="links">
        <p className="link">Home</p>
        <p className="link">Services</p>
        <p className="link">Skills</p>
        <p className="link">Projects</p>
        <p className="link">Contact</p>
      </div>
    </div>
  );
}

export default Header;
