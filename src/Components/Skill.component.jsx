import React from "react";

import "./skill.styles.scss";

function Skill({ skill }) {
  return (
    <div className="skill">
      <h5>{skill}</h5>
    </div>
  );
}

export default Skill;
