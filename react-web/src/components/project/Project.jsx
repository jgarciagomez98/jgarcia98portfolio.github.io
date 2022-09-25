import React from "react";
import "./project.css";
import Button from "../button/Button";

function Project(props) {
  return (
    <div className="project__container">
      <img src={props.img} alt="Project Image" className="project__img" />
      <div className="project__container-data">
        <div className="project__container-data_text">
          <p className="project__name">{props.projectName}</p>
          <p className="project__engine">{props.engine}</p>
          <Button clickEvent={props.clickEvent} buttonText="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Project;
