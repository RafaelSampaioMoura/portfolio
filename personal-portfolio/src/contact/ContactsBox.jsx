import React from "react";
import linkedin from "../assets/iconmonstr-linkedin-3.svg";
import github from "../assets/iconmonstr-github-3.svg";
import discord from "../assets/iconmonstr-discord-3.svg";
import whatsapp from "../assets/iconmonstr-whatsapp-3.svg";

function ContactsBox() {
  return (
    <div>
      <div className="simple-text"></div>
      <div className="contacts">
        <div className="mail-contact"></div>
        <div className="social-media">
          Follow Me:
          <img src={linkedin}></img>
          <img src={github}></img>
          <img src={discord}></img>
          <img src={whatsapp}></img>
        </div>
      </div>
    </div>
  );
}

export default ContactsBox;
