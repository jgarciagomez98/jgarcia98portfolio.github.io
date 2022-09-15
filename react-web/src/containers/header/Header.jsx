import React from "react";
import "./header.css";
import { HeaderButton } from "../../components";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-text">
          <p className="header__presentation">Hello everyone, my name is</p>
          <h1 className="header__title">Javier Garcia.</h1>
          <h1 className="header__subtitle">And I love videogames.</h1>
          {/* <p className="header__description">
            I'm a junior videogame developer focused on programming and
            ocasionally designing experiences.
          </p> */}
        </div>
        <HeaderButton message={"Know about me"} />
      </div>
    </header>
  );
}

export default Header;
