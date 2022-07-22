import React, { useRef, useEffect } from "react";
import "./project-card.styles.scss";

import gitBtn from "../../../src/assets/img/github2.png";
import Skill from "../Skill.component";
import Button from "./../Button.component";

/* Framer Motion */
import { useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="project__card">
      <div
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.4s ease-out 0.2s",
        }}
        className="project__card__body"
      >
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
          <a ref={ref} className="github-link" href={github} target="_blank">
            <img src={gitBtn} alt="github-button" />
          </a>
        </div>
      </div>
      <div
        className="project__card__picture"
        style={{
          backgroundImage: `url(${gif})`,
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.4s ease-out 0.3s",
        }}
      >
        <a href={link} target="_blank">
          <img src={image} alt={title}></img>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
