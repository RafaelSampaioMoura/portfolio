import React from "react";
import ContactsBox from "./ContactsBox";
import MailForm from "./MailForm";

function Contact() {
  return (
    <div className="contact-container">
      <ContactsBox />
      <MailForm />
    </div>
  );
}

export default Contact;
