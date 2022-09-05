import React from "react";
import "./contact.css";
import Button from "../../components/button/Button";

function openEmail() {
  window.open("mailto:jgarciagomez98@gmail.com?subject=Hi%20buddy!");
}

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Get in touch</h1>
        <p className="contact__description">
          If you are interested in working together, don't be afraid and say hi,
          my inbox is always open. I'll try my best to get back to you!
        </p>
        <Button buttonText="Say hello!" clickEvent={openEmail} />
      </div>
    </div>
  );
}

export default Contact;
