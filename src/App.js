import React, { useState, useEffect } from "react";

import "./App.scss";
/* Components */
import Hero from "./Components/hero/Hero";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import LoadingSpinner from "./Components/loadingSpinner/LoadingSpinner.component";
import SuccessPopup from "./Components/successPopup/SuccessPopup.component";
import StylesOptions from "./Components/StylesOptions";

/* Local Storage */
import useLocalStorage from "use-local-storage";

/* Motion */
import { motion } from "framer-motion";

function App() {
  const [loading, setIsLoading] = useState({ spinner: false, popup: false });
  let { spinner, popup } = loading;
  let [english, setEnglish] = useState(true);

  useEffect(() => {
    popup
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [popup]);

  /* website's color theme */
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark").matches;
  // prettier-ignore
  const [theme, setTheme] = useLocalStorage('theme', defaultDark? 'light' : 'dark' )

  return (
    <motion.div
      data-theme={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="App"
    >
      <Hero english={english} setEnglish={setEnglish} />
      <StylesOptions
        setEnglish={setEnglish}
        english={english}
        theme={theme}
        setTheme={setTheme}
      />
      <About english={english} />
      <Projects english={english} />
      {<Contact english={english} setIsLoading={setIsLoading} />}
      {popup ? <SuccessPopup setIsLoading={setIsLoading} /> : null}
      {spinner ? <LoadingSpinner /> : null}
      <Footer />
    </motion.div>
  );
}

export default App;
