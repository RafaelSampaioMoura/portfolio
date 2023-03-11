import React from "react";
import "../images/portfolio_picture.jpg";
import Contacts from "./Contacts";

const Header = () => {
  return (
    <div className="sticky inset-x-0 top-0 h-16 bg-cyan-800 flex justify-around text-cyan-400">
      <h1 className="flex gap-4">
        <img
          src={require("/home/rafael/Documents/portfolio/src/images/portfolio_picture.jpg")}
          alt=""
          className="h-12 w-12"
        />
        <p>Rafael Sampaio Moura - Web Developer</p>
      </h1>
      <div className="flex gap-4 content-center">
        <p>About me</p>
        <p>Projects</p>
        <Contacts />
      </div>
    </div>
  );
};

export default Header;
