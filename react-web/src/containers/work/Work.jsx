import React from "react";
import "./work.css";
import { ProjectGrid, Title, ProjectOverView } from "../../components";

function Work() {
  return (
    <div className="work">
      <div className="work__container">
        <div className="work__title">
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
