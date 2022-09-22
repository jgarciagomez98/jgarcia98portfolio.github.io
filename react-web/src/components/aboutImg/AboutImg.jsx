import React from "react";
import "./aboutImg.css";
import FacePicture from "./pic_about.jpeg";

function AboutImg() {
  return (
    <div className="about__container-img">
      <img src={FacePicture} className="about__img" alt="FacePicture" />
    </div>
  );
}

export default AboutImg;
