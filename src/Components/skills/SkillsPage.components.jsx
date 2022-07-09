import React, { useEffect, useRef, useState } from "react";
import Skill from "./Skill.component";
import { motion } from "framer-motion";

import images from "./images";

import "./skills-page.styles.scss";

let SkillsPage = () => {
  let [skill, setSkill] = useState([
    {
      picture: images[0],
      title: "HTML",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[1],
      title: "CSS",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[2],
      title: "SCSS",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[3],
      title: "JavaScript",

      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[4],
      title: "React",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[5],
      title: "Redux",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[6],
      title: "Docker",

      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[7],
      title: "GitHub",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[8],
      title: "MongoDB",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[9],
      title: "Bootstrap",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
    {
      picture: images[10],
      title: "PhotoShop",
      description:
        "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    },
  ]);
  let [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="skills__section"
      /*  style={{
        backgroundImage: `url(${images[11]})`,
      }} */
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="skills__container"
      >
        {skill.map(({ picture, title, description }, index) => (
          <Skill
            key={index}
            picture={picture}
            title={title}
            description={description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;
