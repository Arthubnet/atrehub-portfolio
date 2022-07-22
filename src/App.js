import React, { useState, useEffect } from "react";

import "./App.scss";

import Navbar from "./Components/Navbar";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import LoadingSpinner from "./Components/loadingSpinner/LoadingSpinner.component";
import SuccessPopup from "./Components/successPopup/SuccessPopup.component";

function App() {
  const [loading, setIsLoading] = useState({ spinner: false, popup: false });
  let { spinner, popup } = loading;

  useEffect(() => {
    popup
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [popup]);

  return (
    <div className="App">
      <About />
      <Projects />
      {<Contact setIsLoading={setIsLoading} />}
      {popup ? <SuccessPopup setIsLoading={setIsLoading} /> : null}
      {spinner ? <LoadingSpinner /> : null}
      <Navbar />
    </div>
  );
}

export default App;
