import React, { useState } from "react";
import Contact from "../contact/contact-component";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner.component";
import SuccessPopup from "../successPopup/SuccessPopup.component";
import AboutPage from "./about/about-page.component";

import "./body.styles.scss";
import Project from "./projects/projects.component";
import SkillsPage from "./skills-page.components";

function Body() {
  const [loading, setIsLoading] = useState({ spinner: false, popup: false });
  let { spinner, popup } = loading;
  return (
    <div className="body">
      <div className="body__container">
        {spinner ? <LoadingSpinner /> : null}
        <AboutPage />
        <SkillsPage />
        <Project />
        <Contact setIsLoading={setIsLoading} />
        {popup ? <SuccessPopup setIsLoading={setIsLoading} /> : null}
      </div>
    </div>
  );
}

export default Body;
