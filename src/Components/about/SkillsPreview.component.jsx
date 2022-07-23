import React from "react";

import "./skills-preview.styles.scss";

function SkillsPreview({ title, icons }) {
  return (
    <div className="skills-preview">
      <h6>{title}</h6>
      <div className="skills-preview__icons">
        {icons.map((item, index) =>
          //prettier-ignore
          <div key={index} className={`${item.link ? "link" : ''} ${item.size ? 'large' : ''} skills-preview__icons-icon`}>
            {item.link ? <a href={item.link} target="_blank"><item.icon /></a> : <item.icon />  }
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsPreview;
