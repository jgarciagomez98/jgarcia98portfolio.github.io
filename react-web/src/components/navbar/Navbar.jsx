import React, { Fragment } from "react";
import "./navbar.css";

const goToSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });
};

const Menu = (props) => (
  <Fragment>
    <p>
      <a href="#home" onClick={() => goToSection(props.goToSection[0])}>
        Home
      </a>
      <div className="navbar__links-underline"></div>
    </p>
    <p>
      <a href="#about" onClick={() => goToSection(props.goToSection[1])}>
        About
      </a>
      <div className="navbar__links-underline"></div>
    </p>
    <p>
      <a href="#work" onClick={() => goToSection(props.goToSection[2])}>
        Work
      </a>
      <div className="navbar__links-underline"></div>
    </p>
    <p>
      <a href="#contact" onClick={() => goToSection(props.goToSection[3])}>
        Contact
      </a>
      <div className="navbar__links-underline"></div>
    </p>
  </Fragment>
);

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__links-container">
        <Menu goToSection={props.goToSection} />
      </div>
      <button className="navbar__resume">Resume</button>
    </div>
  );
}

export default Navbar;
