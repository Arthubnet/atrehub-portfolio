import React, { useState } from "react";
import Contact from "./contact/Contact.component";
import LoadingSpinner from "./loadingSpinner/LoadingSpinner.component";
import SuccessPopup from "./successPopup/SuccessPopup.component";
import AboutPage from "./about/AboutPage.component";

import "./body.styles.scss";
import Project from "./projects/Projects.component";
import SkillsPage from "./skills/SkillsPage.components";

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
