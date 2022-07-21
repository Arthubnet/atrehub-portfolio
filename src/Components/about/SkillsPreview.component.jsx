import React from "react";

import "./skills-preview.styles.scss";

function SkillsPreview({ title, icons }) {
  return (
    <div className="skills-preview">
      <h6>{title}</h6>
      <div className="skills-preview__icons">
        {icons.map((icon, index) =>
          //prettier-ignore
          <div key={index} className={`${icon.link ? "link" : null} skills-preview__icons-icon`}>
            {icon.link ? <a href={icon.link} target="_blank"><icon.icon /></a> : <img key={index} src={icon.icon} alt={icon.alt}></img>  }
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsPreview;
