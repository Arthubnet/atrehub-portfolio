import React, { useState } from "react";
import Navbar from "./Navbar.component";
import Contact from "./contact/Contact.component";
import LoadingSpinner from "./loadingSpinner/LoadingSpinner.component";
import SuccessPopup from "./successPopup/SuccessPopup.component";
import AboutPage from "./about/AboutPage.component";
import Project from "./projects/Projects.component";
import "./body.styles.scss";

function BodyInner() {
  const [loading, setIsLoading] = useState({ spinner: false, popup: false });
  let { spinner, popup } = loading;
  return (
    <>
      <Navbar />
      <div className="body__inner">
        {spinner ? <LoadingSpinner /> : null}
        <AboutPage />
        <Project />
        <Contact setIsLoading={setIsLoading} />
        {popup ? <SuccessPopup setIsLoading={setIsLoading} /> : null}
      </div>
    </>
  );
}

export default BodyInner;
