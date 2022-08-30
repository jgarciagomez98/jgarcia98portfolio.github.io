import React from "react";
import { AboutImg, Skills } from "../../components";
import UnityLogo from "../../components/skills/logos/U_Logo_Black_RGB.png";
import UnrealLogo from "../../components/skills/logos/UE_Logo_icon-only_black.png";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h1 className="about__title">About</h1>
        <div className="about__container-info">
          <div className="about__container-personal_data">
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              tortor molestie, vehicula metus in, molestie erat. Nam ut dolor
              lacus. Curabitur semper consectetur feugiat. Etiam dapibus quam
              nec nulla pretium, non vulputate mauris mollis. Nunc consequat
              justo sem, sit amet rhoncus tortor tristique sit amet. Sed sodales
              consectetur pulvinar. Vestibulum mauris urna, imperdiet a vehicula
              vel, finibus et lorem. Suspendisse tempus scelerisque sem, id
              vulputate arcu.
            </p>
            <AboutImg />
          </div>
          <div className="about__container-skills">
            <Skills value="90" logo={UnityLogo} />
            <Skills value="80" logo={UnrealLogo} />
            <Skills value="80" logo={UnrealLogo} />
            <Skills value="80" logo={UnrealLogo} />
            <Skills value="80" logo={UnrealLogo} />
            <Skills value="80" logo={UnrealLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
