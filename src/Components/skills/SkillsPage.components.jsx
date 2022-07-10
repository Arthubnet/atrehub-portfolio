import React, { useEffect, useRef, useState } from "react";
import Skill from "./Skill.component";

import images from "./images";

import "./skills-page.styles.scss";

let SkillsPage = () => {
  let skill = [
    {
      picture: images[0],
      title: "HTML",
    },
    {
      picture: images[1],
      title: "CSS",
    },
    {
      picture: images[2],
      title: "SCSS",
    },
    {
      picture: images[3],
      title: "JavaScript",
    },
    {
      picture: images[4],
      title: "React",
    },
    {
      picture: images[5],
      title: "Redux",
    },
    {
      picture: images[6],
      title: "Docker",
    },
    {
      picture: images[7],
      title: "GitHub",
    },
    {
      picture: images[8],
      title: "MongoDB",
    },
    {
      picture: images[9],
      title: "Bootstrap",
    },
    {
      picture: images[10],
      title: "PhotoShop",
    },
  ];
  let [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div ref={carousel} className="skills__section">
      <div
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
      </div>
    </div>
  );
};

export default SkillsPage;
