import React from "react";
import "./work.css";
import { ProjectGrid, Title, ProjectOverView } from "../../components";

function Work(props) {
  return (
    <div className="work">
      <div className="work__container">
        <div className="work__title" ref={props.refSection}>
          <Title title="Projects" />
        </div>
        <div className="work__container-projects">
          <ProjectGrid />
          <ProjectOverView id="3" hasSteam="true" />
        </div>
      </div>
    </div>
  );
}

export default Work;
