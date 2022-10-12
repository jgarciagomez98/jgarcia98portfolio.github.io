import React from "react";
import "./header.css";
import { HeaderButton } from "../../components";

function Header(props) {
  return (
    <header className="header" ref={props.refSection}>
      <div className="header__container">
        <div className="header__container-text">
          <h1 className="header__title">
            Hi, I'm <span>Javier Garcia.</span>
          </h1>
          <h1 className="header__subtitle">And I love videogames.</h1>
        </div>
        <HeaderButton
          message={"Know about me"}
          goToSection={props.goToSection}
        />
      </div>
    </header>
  );
}

export default Header;
