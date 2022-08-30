import React from "react";
import "./aboutImg.css";
import FacePicture from "./pic_about.jpeg";

function AboutImg() {
  return (
    <div className="about__container-img">
      <img src={FacePicture} className="about__img" alt="FacePicture" />
      <div className="about__img-border"></div>
    </div>
  );
}

export default AboutImg;
