import React from "react";
import { AboutImg, SkillsGrid, Title } from "../../components";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">
          <Title title="About Me" />
        </div>
        <div className="about__container-info">
          <div className="about__container-personal_data">
            <p className="about__text">
              Hello! My name is Javier Garcia and I love all things that have to
              do with video games. My history in video game development started
              six years ago when I decided to study a career focused on them.
              <br />
              <br />
              My strengths are programming and level design. And also, sometimes
              I make VFX.
              <br />
              <br />
              Nowadays I work as a mobile developer in Android in{" "}
              <span>Movetia.</span> And my main tasks are maintenance and
              developing of mobile apps.
            </p>
            <AboutImg />
          </div>
          <div className="about__container-skills">
            <SkillsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
