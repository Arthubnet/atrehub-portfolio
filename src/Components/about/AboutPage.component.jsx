import React from "react";
import "./about-page.styles.scss";

import SkillsPreview from "./SkillsPreview.component";

import { ReactComponent as GitIcon } from "../../assets/img/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/img/linkedin2.svg";

import jsIcon from "../../assets/img/js2.svg.png";
import reactIcon from "../../assets/img/react.svg";
import cssIcon from "../../assets/img/css2.png";
import myself from "../../assets/img/pic2.jpg";

function AboutPage() {
  let previews = [
    {
      title: "Best Skill On",
      icons: [
        { icon: jsIcon, alt: "javascript-icon" },
        { icon: reactIcon, alt: "react-icon" },
        { icon: cssIcon, alt: "css-icon" },
      ],
    },
    {
      title: "Get In Touch",
      icons: [
        {
          icon: GitIcon,
          link: "https://github.com/Arthubnet",
          alt: "github-icon",
        },
        {
          icon: LinkedinIcon,
          link: "https://www.linkedin.com/in/artem-trehub/",
          alt: "linkedin-icon",
        },
      ],
    },
  ];
  return (
    <div className="body__about">
      <div className="body__about__picture">
        <img src={myself}></img>
      </div>
      <div className="body__about__title">
        <h2>Artem Trehub</h2>
        <h3>
          <span>React</span> Web Developer
        </h3>
        <p>
          My Web path started 12 years ago as Digital Marketing Manager, also
          ran own marketing business based in Ukraine, Kyiv that operated within
          Post-Soviet countries for 5 years. User experience and psychology in
          general was always my passion, but working with developers woke up a
          new desire to code. After creating my first website I can't stop
          coding, at the moment primarily create web apps through JS React, but
          also have experience in developing full stack applications. To learn
          more, take a look at my latest projects below.
        </p>
        <div className="body__about__previews">
          {previews.map(({ title, icons }, index) => (
            <SkillsPreview key={index} title={title} icons={icons} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
