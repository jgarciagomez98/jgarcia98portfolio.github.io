import React from "react";
import "./headerButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeaderButton() {
  return (
    <div className="header__button">
      <div className="header__button-container">
        <p>View my work</p>
        <div className="header__button-icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
}

export default HeaderButton;
