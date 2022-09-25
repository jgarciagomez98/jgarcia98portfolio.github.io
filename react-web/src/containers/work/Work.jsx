import React from "react";
import "./work.css";
import { ProjectGrid, Title } from "../../components";

function Work() {
  return (
    <div className="work">
      <div className="work__container">
        <div className="work__title">
          <Title title="Projects" />
        </div>
        <div className="work__container-projects">
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
}

export default Work;
