import React from "react";

import "./skills-preview.styles.scss";

function SkillsPreview({ title, icons }) {
  return (
    <div className="skills-preview">
      <h6>{title}</h6>
      <div className="skills-preview__icons">
        {icons.map((icon, index) => (
          <div className="skills-preview__icons-icon">
            <img key={index} src={icon.link} alt={icon.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
