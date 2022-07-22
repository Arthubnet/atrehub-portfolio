import React from "react";
import "./project-card.styles.scss";

import gitBtn from "../../../src/assets/img/github2.png";
import Skill from "../Skill.component";
import Button from "./../Button.component";

function ProjectCard({
  tech,
  title,
  description,
  image,
  color,
  link,
  github,
  gif,
  skills,
}) {
  return (
    <div className="project__card">
      <div className="project__card__body">
        <h4>{tech}</h4>
        <h1>{title}</h1>
        <div className="project__card__skills">
          {skills.map((item, index) => (
            <Skill key={index} skill={item.skill} />
          ))}
        </div>
        <p>{description.map((item) => item)}</p>
        <div className="project__card__links">
          <Button link={link}>Open Project</Button>
          <a className="github-link" href={github} target="_blank">
            <img src={gitBtn} alt="github-button" />
          </a>
        </div>
      </div>
      <div
        className="project__card__picture"
        style={{ backgroundImage: `url(${gif})` }}
      >
        <a href={link} target="_blank">
          <img src={image} alt={title}></img>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
