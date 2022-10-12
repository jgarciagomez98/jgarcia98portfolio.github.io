import React from "react";
import "./contact.css";
import { Button, Title } from "../../components";

function openEmail() {
  window.open("mailto:jgarciagomez98@gmail.com?subject=Hi%20buddy!");
}

function Contact(props) {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__title" ref={props.refSection}>
          <Title title="Get In Touch" />
        </div>
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
