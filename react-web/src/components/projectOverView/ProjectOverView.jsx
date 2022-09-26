import React, { Fragment } from "react";
import Title from "../titles/Title";
import { Bankers1, ProjectsData } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItchIo, faSteam } from "@fortawesome/free-brands-svg-icons";
import "./projectOverView.css";
import { render } from "@testing-library/react";

function openItchIo() {
  openLink("https://github.com/jgarciagomez98");
}

function openSteam() {
  openLink("https://store.steampowered.com/app/1708510/Bankers__Bonkers/?");
}

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function ProjectOverView(props) {
  const projectId = props.id;
  return (
    <div className="project__overview">
      <div className="project__overview-container">
        <div className="project__overview-title">
          <Title title={ProjectsData[projectId].title} />
        </div>
        <div className="project__overview-img_container">
          <img src={Bankers1} alt="" className="project__overview-img" />
        </div>
        <div className="project__overview-info_container">
          <p className="project__overview-info">
            {ProjectsData[projectId].info}
          </p>
          <div className="project__overview-roles_container">
            <p className="project__overview-roles_title">Main Roles:</p>
            <div className="project__overview-roles_list">
              {ProjectsData[projectId].mainRole.map((project) => (
                <li>{project}</li>
              ))}
            </div>
          </div>
          <div className="project__overview-media">
            {props.hasItchIo && (
              <div className="social__media-logo">
                <FontAwesomeIcon
                  icon={faItchIo}
                  className="media__logo fa-itchio"
                  onClick={openItchIo}
                />
              </div>
            )}
            {props.hasSteam && (
              <div className="social__media-logo">
                <FontAwesomeIcon
                  icon={faSteam}
                  className="media__logo fa-steam"
                  onClick={openSteam}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverView;
