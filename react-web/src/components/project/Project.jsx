import React from "react";
import "./project.css";
import ProjectLogo from "./UE_Logo_icon-only_black.png";

function Project(props) {
  return (
    <div className="project__container">
      <img src={ProjectLogo} alt="Project Image" className="project__img" />
      <div className="project__container-data">
        <div className="project__name">{props.projectName}</div>
        <button className="project__button">Learn more</button>
      </div>
    </div>
  );
}

export default Project;
