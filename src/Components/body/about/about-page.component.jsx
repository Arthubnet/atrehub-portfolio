import React from "react";
import "./about-page.styles.scss";

import arrow from "../img/arrow2.png";
import Button from "../../Button.component";

function AboutPage() {
  return (
    <div className="body__about">
      <h2>React Web Developer</h2>
      <p>
        My name is Artem Trehub, I'm a web-developer with 12+ years of
        experience in IT. Mostly creating Web Apps on React but also proficient
        with pure JavaScript, CSS and HTML. My path in Web started as a marketer
        so I also enjoy UX and everything related to user experience(interaction
        analysis, psychology). Always open and excited for a new project, reach
        out to me so we can create something exciting.
      </p>
      <div className="body__about__title">
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
        <Button cv={"cv"}> Download CV</Button>
      </div>
    </div>
  );
}

export default AboutPage;
