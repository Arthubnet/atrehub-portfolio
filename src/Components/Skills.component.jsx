import React from "react";
import "./skills.styles.scss";

import html from "../assets/img/html2.png";
import css from "../assets/img/css2.png";
import js from "../assets/img/js2.svg.png";
import react from "../assets/img/react.svg";
import redux from "../assets/img/redux2.png";
import mongoDb from "../assets/img/mongoDB2.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__title">
        <h3>Skills</h3>
      </div>
      <div className="skills__list">
        <div className="skill">
          <img src={html}></img>
        </div>
        <div className="skill">
          <img src={css}></img>
        </div>
        <div className="skill">
          <img src={js}></img>
        </div>
        <div className="skill">
          <img src={react}></img>
        </div>
        <div className="skill">
          <img src={redux}></img>
        </div>
        <div className="skill">
          <img src={mongoDb}></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
