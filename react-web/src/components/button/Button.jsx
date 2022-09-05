import React from "react";
import "./button.css";

function Button(props) {
  return <button onClick={props.clickEvent}>{props.buttonText}</button>;
}

export default Button;
