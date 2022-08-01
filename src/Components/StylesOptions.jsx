import React, { useState } from "react";

import "./styles-options.styles.scss";

/* Svgs */
import gearSvg from "../assets/img/gear.svg";
import moonSvg from "../assets/img/moon.svg";
import sunSvg from "../assets/img/sun.svg";
import usaSvg from "../assets/img/usa.svg";
import uaSvg from "../assets/img/ukraine-heart.png";

/* motion */
import { motion } from "framer-motion";

function StylesOptions({ setEnglish, setTheme, setPageAnimation }) {
  const [optionsActive, setOptionsActive] = useState(false);
  const themeAnimation = (type) => {
    setTheme(type);
    setPageAnimation(true);
  };

  const languageAnimation = (bool) => {
    setPageAnimation(true);
    setEnglish(bool);
  };

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: optionsActive ? 0 : 200 }}
      transition={{ duration: 0.5 }}
      className="styles-options"
    >
      <div onClick={() => setOptionsActive(!optionsActive)} className="gear">
        <img src={gearSvg} alt="gear" />
      </div>
      <div className="styles-container">
        <h5>Theme Style</h5>
        <div className="styles-container-choises">
          <div onClick={() => themeAnimation("dark")} className="moon">
            <img src={moonSvg} alt="moon" />
            <p className="dark">Dark</p>
          </div>
          <div onClick={() => themeAnimation("light")} className="sun">
            <img src={sunSvg} alt="sun" />
            <p>Light</p>
          </div>
        </div>
      </div>
      <div className="styles-container">
        <h5>Languages</h5>
        <div className="styles-container-choises">
          <div onClick={() => languageAnimation(true)} className="usa">
            <img src={usaSvg} alt="usa" />
            <p>USA</p>
          </div>
          <div onClick={() => languageAnimation(false)} className="ua">
            <img src={uaSvg} alt="ua" />
            <p>UA</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StylesOptions;
