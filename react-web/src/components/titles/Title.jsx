import React from "react";
import "./title.css";

function Title(props) {
  return (
    <div className="title__container">
      <h1 className="title">{props.title}</h1>
      <div className="title__underline"></div>
    </div>
  );
}

export default Title;
