import React from "react";
import "./project-card.styles.scss";

function ProjectCard({ title, description, image, color, link }) {
  return (
    <div className="project__card">
      <div className="project__card__picture">
        <a href={link} target="__blank">
          <img src={image} alt={title}></img>
        </a>
      </div>
      <div className="project__card__body">
        <h3 style={{ color: color }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
