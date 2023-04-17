import React from "react";
import {
  css3_info,
  html_5_info,
  js_info,
  react_info,
  redux_info,
  jest_info,
  docker_info,
  mysql_info,
  nodejs_info,
} from "../assets/skill_icons/icons";

function Skill() {
  const icons_array = [
    css3_info,
    html_5_info,
    js_info,
    react_info,
    redux_info,
    jest_info,
    nodejs_info,
    mysql_info,
    docker_info,
  ];
  return (
    <div className="skill_page_main">
      <div className="header">
        <h1>Skills & Stacks</h1>
        <div className="links">
          <p className="link">Home</p>
          <p className="link">Services</p>
          <p className="link">Skills</p>
          <p className="link">Projects</p>
          <p className="link">Contact</p>
        </div>
      </div>

      <div className="skillIconsDeck">
        {icons_array.map((e) => {
          return (
            <a href={e.mainpage} className="skill_icon">
              <img src={e.icon} className="skill_icon_img" />
              {e.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
