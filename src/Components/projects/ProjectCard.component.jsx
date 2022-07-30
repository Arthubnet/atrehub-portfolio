import React, { useRef } from "react";
import "./project-card.styles.scss";

import gitBtn from "../../../src/assets/img/github2.png";
import Skill from "../Skill.component";
import Button from "./../Button.component";

/* Framer Motion */
import { motion, useInView } from "framer-motion";

import parse from "html-react-parser";

function ProjectCard({
  tech,
  title,
  image,
  link,
  github,
  gif,
  skills,
  english,
  us,
  ua,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="project__card">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1.9,
          delay: 0.3,
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
        <p>{parse(`${english ? us : ua}`)}</p>
        <div className="project__card__links">
          <Button link={link}>
            {english ? "Open Project" : "Відкрити проект"}
          </Button>
          <a ref={ref} className="github-link" href={github} target="_blank">
            <img src={gitBtn} alt="github-button" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="project__card__picture"
        style={{
          backgroundImage: `url(${gif})`,
        }}
        initial={{ x: -130, opacity: 0 }}
        animate={{
          x: isInView ? 0 : -130,
          opacity: isInView ? 1 : 0,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1.9,
          delay: 0.35,
          scale: {
            duration: 0.2,
            delay: 0,
          },
        }}
      >
        <a href={link} target="_blank">
          <img src={image} alt={title}></img>
        </a>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
