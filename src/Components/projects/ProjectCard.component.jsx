import React, { useRef } from "react";
import "./project-card.styles.scss";

import { ReactComponent as GitSvg } from "../../../src/assets/img/github.svg";
import Skill from "../Skill.component";
import Button from "./../Button.component";

/* Framer Motion */
import { motion, useInView } from "framer-motion";
/* html parse */
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
    <div className="project__card">
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
        <h2>{title}</h2>
        <div ref={ref} className="project__card__skills">
          {skills.map((item, index) => (
            <Skill key={index} skill={item.skill} />
          ))}
        </div>
        {parse(`${english ? us : ua}`)}
        <div className="project__card__links">
          <Button link={link}>
            {english ? "Open Project" : "Відкрити проект"}
          </Button>
          {github ? (
            <a className="github-link" href={github} target="_blank">
              <GitSvg />
            </a>
          ) : null}
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
        whileHover={{ scale: 1.1 }}
        /* whileTap={{ scale: 0.95 }} */
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1.9,
          delay: 0.35,
          scale: {
            duration: 1,
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
