import React from "react";
import Skills from "./Skills";
import "./skillsGrid.css";

function SkillsGrid() {
  return (
    <div className="skills__container">
      <Skills value="90" name="Unity" />
      <Skills value="80" name="Unreal Engine" />
      <Skills value="80" name="Java" />
      <Skills value="70" name="C++" />
      <Skills value="60" name="C#" />
      <Skills value="60" name="React" />
      <Skills value="50" name="HTML" />
      <Skills value="60" name="CSS" />
      <Skills value="60" name="Java Script" />
      <Skills value="40" name="Photoshop" />
      <Skills value="30" name="UI Design" />
    </div>
  );
}

export default SkillsGrid;
