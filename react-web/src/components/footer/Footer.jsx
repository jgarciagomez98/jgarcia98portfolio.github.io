import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function openGitHub() {
  openLink("https://github.com/jgarciagomez98");
}

function openLinkedin() {
  openLink("https://www.linkedin.com/in/javier-garcía-gómez-b1b561198/");
}

function openTwitter() {
  openLink("https://twitter.com/dovi_3");
}

function openInstagram() {
  openLink("https://www.instagram.com/javijg33/");
}

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-logos">
          <FontAwesomeIcon
            icon={faGithub}
            className="footer__logo fa-github"
            onClick={openGitHub}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="footer__logo fa-linkedin"
            onClick={openLinkedin}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="footer__logo fa-twitter"
            onClick={openTwitter}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer__logo fa-instagram"
            onClick={openInstagram}
          />
        </div>
        <p className="footer__text">Designed & Built by Javier Garcia</p>
      </div>
    </div>
  );
}

export default Footer;
