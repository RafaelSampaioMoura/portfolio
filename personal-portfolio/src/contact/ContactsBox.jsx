import React from "react";
import linkedin from "../assets/iconmonstr-linkedin-3.svg";
import github from "../assets/iconmonstr-github-3.svg";
import discord from "../assets/iconmonstr-discord-3.svg";
import whatsapp from "../assets/iconmonstr-whatsapp-3.svg";

function ContactsBox() {
  return (
    <div className="contact-box">
      <div className="simple-text">
        <h1>Come and say hi!</h1>
        <p>
          I'm always open to discuss projects or offers, or even just to talk
          about new things!
        </p>
      </div>
      <div className="contacts">
        <div className="mail-contact">rafaelsm123@outlook.com</div>
        <div className="social-media">
          <p>Follow Me:</p>
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
