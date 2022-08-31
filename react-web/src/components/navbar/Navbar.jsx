import React, { Fragment } from "react";
import "./navbar.css";

const Menu = () => (
  <Fragment>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#work">Portfolio</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
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
