import React from "react";
import placeholder from "../assets/316_Oberon_2.png";

function Main() {
  return (
    <div className="main">
      <div className="intro">
        <p className="name">
          I'm <b>Rafael Sampaio Moura</b>
        </p>
        <p className="bullshit">
          Web-Programmer, JavaScript Developer and eternal student
        </p>
      </div>
      <img src={placeholder} className="photo"></img>
    </div>
  );
}

export default Main;
