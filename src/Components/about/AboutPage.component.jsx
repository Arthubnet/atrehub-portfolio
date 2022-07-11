import React from "react";
import "./about-page.styles.scss";

import Button from "../Button.component";

function AboutPage() {
  return (
    <div className="body__about">
      <h2>
        React <span>Web Developer</span>
      </h2>
      <p>
        My name is Artem Trehub, I'm mostly creating web apps through JS React,
        however also have experience in developing full stuck applications.
        Check out my latest projects below.
      </p>
      {/*
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
         <a href="">
          <Button cv={"cv"}> Download CV</Button>
        </a> 
      </div>*/}
    </div>
  );
}

export default AboutPage;
