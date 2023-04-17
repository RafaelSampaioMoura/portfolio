import React from "react";
import linkedin from "../assets/iconmonstr-linkedin-3.svg";
import github from "../assets/iconmonstr-github-3.svg";
import discord from "../assets/iconmonstr-discord-3.svg";
import whatsapp from "../assets/iconmonstr-whatsapp-3.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img src={linkedin}></img>
        <img src={github}></img>
        <img src={discord}></img>
        <img src={whatsapp}></img>
      </div>
      <div className="email">rafaelsm123@outlook.com</div>
    </div>
  );
}

export default Footer;
