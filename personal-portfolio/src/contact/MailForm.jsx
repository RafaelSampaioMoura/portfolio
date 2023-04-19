import React from "react";

function MailForm() {
  return (
    <form className="mail-form">
      <label htmlFor="sender">
        {" "}
        Your name:
        <br />
        <input type="text" name="sender" id="sender" />
      </label>
      <label htmlFor="mail-address">
        {" "}
        Your email:
        <br />
        <input type="email" name="mail-address" id="mail-address" />
      </label>
      <label htmlFor="message">
        {" "}
        Your message: <br />
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default MailForm;
