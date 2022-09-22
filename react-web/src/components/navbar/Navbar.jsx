import React, { Fragment } from "react";
import "./navbar.css";

const Menu = () => (
  <Fragment>
    <p>
      <a href="#home">Home</a>
      <div className="navbar__links-underline"></div>
    </p>
    <p>
      <a href="#about">About</a>
      <div className="navbar__links-underline"></div>
    </p>
    <p>
      <a href="#work">Work</a>
      <div className="navbar__links-underline"></div>
    </p>
    <p>
      <a href="#contact">Contact</a>
      <div className="navbar__links-underline"></div>
    </p>
  </Fragment>
);

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links-container">
        <Menu />
      </div>
      <button className="navbar__resume">Resume</button>
    </div>
  );
}

export default Navbar;
