import React from "react";
import { AboutImg, Skills, Title } from "../../components";
import UnityLogo from "../../components/skills/logos/U_Logo_Black_RGB.png";
import UnrealLogo from "../../components/skills/logos/UE_Logo_icon-only_black.png";
import CPPLogo from "../../components/skills/logos/ISO_C++_Logo.png";
import CSharpLogo from "../../components/skills/logos/Csharp_Logo.png";
import ReactLogo from "../../components/skills/logos/React-icon.png";
import JavaLogo from "../../components/skills/logos/java_logo.png";
import HTMLLogo from "../../components/skills/logos/HTML5_logo_and_wordmark.png";
import CSSLogo from "../../components/skills/logos/CSS3_logo_and_wordmark.png";
import JSLogo from "../../components/skills/logos/64px-JavaScript-logo.png";
import PhotoshopLogo from "../../components/skills/logos/Adobe_Photoshop_CC_icon.png";
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
            <Skills value="90" logo={UnityLogo} />
            <Skills value="80" logo={UnrealLogo} />
            <Skills value="80" logo={CPPLogo} />
            <Skills value="80" logo={CSharpLogo} />
            <Skills value="80" logo={ReactLogo} />
            <Skills value="80" logo={JavaLogo} />
            <Skills value="80" logo={HTMLLogo} />
            <Skills value="80" logo={CSSLogo} />
            <Skills value="80" logo={JSLogo} />
            <Skills value="80" logo={PhotoshopLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
