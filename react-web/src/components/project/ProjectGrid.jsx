import React from "react";
import "./projectGrid.css";
import Project from "./Project";
import { Bankers1 } from "../../assets";

const funtionBankers = () => {
  console.log("AAAA");
};

function ProjectGrid() {
  return (
    <div className="project__grid-container">
      <div className="project__grid">
        <Project
          img={Bankers1}
          projectName="Bankers & Bonkers"
          engine="Unreal Engine"
          clickEvent={funtionBankers}
        />
        <Project
          img={Bankers1}
          projectName="Flag Hunters"
          engine="Unreal Engine"
        />
        <Project
          img={Bankers1}
          projectName="Egiptian Crusaders"
          engine="Unreal Engine"
        />
        <Project img={Bankers1} projectName="Garden World" engine="Unity" />
      </div>
    </div>
  );
}

export default ProjectGrid;
