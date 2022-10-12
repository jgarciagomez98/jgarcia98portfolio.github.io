import React from "react";
import "./headerButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const goToAboutSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });
};

function HeaderButton(props) {
  return (
    <div className="header__button">
      <a
        href="#"
        className="header__button-container"
        onClick={() => goToAboutSection(props.goToSection)}
      >
        <p>{props.message}</p>
        <div className="header__button-icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </a>
    </div>
  );
}

export default HeaderButton;
