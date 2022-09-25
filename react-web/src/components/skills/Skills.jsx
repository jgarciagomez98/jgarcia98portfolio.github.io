import React from "react";
import "./skills.css";

function Skills(props) {
  return (
    <div className="skill__container">
      <p className="skill__name">{props.name}</p>
      <div
        className="progress__bar"
        style={{
          background: `linear-gradient(0.25turn, var(--third-color) ${props.value}%, rgba(151, 0, 0, 0.25) ${props.value}%)`,
        }}
      ></div>
      <p className="progress__value">{props.value}%</p>
    </div>
  );
}

export default Skills;
