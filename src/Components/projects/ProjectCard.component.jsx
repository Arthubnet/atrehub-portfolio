import React from "react";
import "./project-card.styles.scss";

import gitBtn from "../../../src/assets/img/git1.png";

function ProjectCard({ title, description, image, color, link, github, gif }) {
  return (
    <div className="project__card">
      <div
        style={{ backgroundImage: `url(${gif})` }}
        className="project__card__picture"
      >
        <a href={link} target="__blank">
          <img src={image} alt={title}></img>
        </a>
      </div>
      <div className="project__card__body">
        <h3 style={{ color: color }}>{title}</h3>
        <p>{description}</p>
        <div class="project__card__links">
          <a href={github} target="__blank">
            <img src={gitBtn} />
          </a>
          <a href={link} target="__blank">
            <p>Open The Project</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
