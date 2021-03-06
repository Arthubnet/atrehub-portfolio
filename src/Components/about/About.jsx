import React from "react";
import "./about-page.styles.scss";

import SkillsPreview from "./SkillsPreview.component";

import { ReactComponent as GitIcon } from "../../assets/img/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/img/linkedin.svg";
import { ReactComponent as ReactIcon } from "../../assets/img/react.svg";
import { ReactComponent as JsIcon } from "../../assets/img/js.svg";
import { ReactComponent as CSSIcon } from "../../assets/img/css3.svg";

import myself from "../../assets/img/pic.jpg";

function About() {
  let previews = [
    {
      title: "Best Skill On",
      icons: [
        { icon: ReactIcon, alt: "react-icon", size: "large" },
        { icon: JsIcon, alt: "javascript-icon", size: "large" },
        { icon: CSSIcon, alt: "css-icon", size: "large" },
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
    <section className="about">
      <div className="about__container">
        <img className="about__picture" src={myself}></img>
        <div className="about__title">
          <div className="box-wrapper">
            <div className="box">
              <div className="title">
                <span className="block"></span>
                <h2>
                  Artem Trehub<span></span>
                </h2>
              </div>

              <div className="role">
                <div className="block"></div>
                <h3>React Web Developer</h3>
              </div>
            </div>
          </div>
          {/* <h2>Artem Trehub</h2>
          <h3>React Web Developer</h3> */}
          <p>
            My Web path started 12 years ago as Digital Marketing Manager, also
            ran own marketing business based in Ukraine, Kyiv that operated
            within Post-Soviet countries for 5 years. User experience and
            psychology in general was always my passion, but working with
            developers woke up a new desire to code. After creating my first
            website I can't stop coding, at the moment primarily create web apps
            through <span>JS React</span>, but also have experience in
            developing full stack applications. To learn more, take a look at my
            latest projects below.
          </p>
          <div className="about__previews">
            {previews.map(({ title, icons }, index) => (
              <SkillsPreview key={index} title={title} icons={icons} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
