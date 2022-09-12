import React from "react";
import "./skills.css";

function Skills(props) {
  return (
    <div className="skill__container">
      <div
        className="progress__circle"
        style={{
          background: `conic-gradient(var(--secondary-color-light) ${
            props.value * 3.6
          }deg, var(--primary-color) 0deg)`,
        }}
      >
        <p className="progress__value">{props.value}%</p>
      </div>
      <div className="skill__container-logo">
        <img src={props.logo} alt="logo" className="skill__logo" />
      </div>
    </div>
  );
}

export default Skills;
