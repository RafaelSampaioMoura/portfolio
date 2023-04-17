import React from "react";
import {
  css3,
  html5,
  javascript,
  react,
  redux,
  jest,
  mysql,
  docker,
  nodejs,
} from "../assets/skill_icons/icons";

function Skill() {
  const icons_array = [
    css3,
    html5,
    javascript,
    react,
    redux,
    jest,
    mysql,
    docker,
    nodejs,
  ];
  return (
    <div>
      <h1>Skills & Stacks</h1>
      <div>
        {icons_array.map((e) => {
          return <img src={e} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Skill;
