import React, { useEffect, useRef, useState } from "react";
import "./skill.styles.scss";

function Skill({ title, picture }) {
  return (
    <div className="skill">
      <div
        style={{
          backgroundImage: `url(${picture})`,
        }}
        className="skill__image"
      >
        {/* <img src={picture} alt=""></img> */}
      </div>
      <div className="skill__title">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Skill;
