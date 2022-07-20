import React from "react";
import "./about-page.styles.scss";

import Button from "../Button.component";
import Skills from "../Skills.component";

function AboutPage() {
  return (
    <div className="body__about">
      <h1>Artem Trehub</h1>
      <h3>
        <span>React</span> Web Developer
      </h3>
      <p>
        My Web path started 12 years ago as Digital Marketing Manager, also ran
        own marketing business based in Ukraine, Kyiv that operated within
        Post-Soviet countries for 5 years. User experience and psychology in
        general was always my passion, but working with developers woke up a new
        desire to code. After creating my first website I can't stop coding, at
        the moment primarily create web apps through JS React, but also have
        experience in developing full stack applications. To learn more, take a
        look at my latest projects below.
      </p>
      <Skills />

      {/* <div className="body__about__title">
        <a
          className="about-link"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/artem-trehub/"
        >
          More about me
          <span className="about-link__span">
            https://www.linkedin.com/in/artem-trehub/
          </span>
        </a>
        <a href="">
          <Button cv={"cv"}> Download CV</Button>
        </a>
      </div> */}
    </div>
  );
}

export default AboutPage;
