import React from "react";
import "./header.css";
import { HeaderButton } from "../../components";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__text">
          <p className="header__presentation">Hi, my name is</p>
          <h1 className="header__title">Javier Garcia.</h1>
          <h1 className="header__subtitle">And I love videogames.</h1>
          <p className="header__description">
            I'm a junior videogame developer focused on programming and
            ocasionally designing experiences. Currently, I'm working as a
            Android developer at <span className="underline">Movetia</span>.
          </p>
        </div>
        <HeaderButton />
      </div>
    </header>
  );
}

export default Header;
