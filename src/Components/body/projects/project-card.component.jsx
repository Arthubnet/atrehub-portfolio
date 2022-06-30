import React from "react";
import "./project-card.styles.scss";

function ProjectCard({ title, description, image, color }) {
  return (
    <div className="project__card">
      <div className="project__card__picture">
        <img src={image} alt=""></img>
      </div>
      <div className="project__card__body">
        <h3 style={{ color: color }}>{title}</h3>
        <p>{description}</p>
        {/*  <div className="project__card__body__links">
          <a href="#">Read More</a>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectCard;
