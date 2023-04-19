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
          <a href="https://www.linkedin.com/in/rafael-sampaio-moura/">
            <img src={linkedin}></img>
          </a>
          <a href="https://github.com/RafaelSampaioMoura">
            <img src={github}></img>
          </a>
          <a href="https://discordapp.com/users/979053270339293224">
            <img src={discord}></img>
          </a>
          <a href="https://wa.me/558888243188">
            <img src={whatsapp}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactsBox;
