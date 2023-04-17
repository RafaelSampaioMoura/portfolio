import React from "react";
import {
  css3_info,
  html_5_info,
  js_info,
  react_info,
  redux_info,
  jest_info,
} from "../assets/skill_icons/icons";

function Skill() {
  const icons_array = [
    css3_info,
    html_5_info,
    js_info,
    react_info,
    redux_info,
    jest_info,
  ];
  return (
    <div className="skill_page_main">
      <h1>Skills & Stacks</h1>
      <div className="skillIconsDeck">
        {icons_array.map((e) => {
          return (
            <a href={e.mainpage} className="skill_icon">
              <img src={e.icon} className="skill_icon_img"/>
              {e.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
