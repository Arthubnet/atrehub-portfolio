import React from "react";
import Contact from "../contact/contact-component";
import AboutPage from "./about/about-page.component";

import "./body.styles.scss";
import ProjectsCards from "./project-cards.component";
import Project from "./projects/projects.component";
import SkillsPage from "./skills-page.components";

function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <AboutPage />
        <SkillsPage />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default Body;
