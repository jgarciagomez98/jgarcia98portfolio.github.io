import React from "react";
import "./work.css";
import { Project } from "../../components";

function Work() {
  return (
    <div className="work">
      <div className="work__container">
        <h1 className="work__title">Projects</h1>
        <div className="work__container-projects">
          <Project projectName="Bankers & Bonkers" />
          <Project projectName="Flag Hunters" />
          <Project projectName="Egiptian Crusaders" />
          <Project projectName="Garden World" />
        </div>
      </div>
    </div>
  );
}

export default Work;
