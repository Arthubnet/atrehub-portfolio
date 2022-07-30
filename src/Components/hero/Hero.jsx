import React, { useState, useEffect } from "react";

import "./hero.styles.scss";
import { ReactComponent as GitSvg } from "../../assets/img/github.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/img/linkedin.svg";

import { motion } from "framer-motion";

function Hero({ english, setEnglish }) {
  console.log("re - render");
  return (
    <motion.section className="hero">
      <div className="navbar">
        <a href="/">
          <h5 className="logo">{english ? "Trehub A." : "Трегуб А."}</h5>
        </a>
        <div className="languages">
          <motion.i
            onClick={() => setEnglish(true)}
            animate={{
              color: english ? "rgb(0, 91, 187)" : "rgb(52, 56, 66)",
            }}
          >
            US
          </motion.i>
          <motion.i
            onClick={() => setEnglish(false)}
            animate={{
              color: !english ? "rgb(255, 213, 00)" : "rgb(52, 56, 66)",
            }}
          >
            UA
          </motion.i>
        </div>
      </div>
      <div className="hero__title">
        <h1>{english ? "Artem Trehub" : "Трегуб Артем"}</h1>
        <h2>
          <span>React </span>
          {english ? "Web Developer" : "Web-Розробник"}
        </h2>
      </div>
      <div className="hero__footer">
        <a href="#about">
          <h3 className="scroll">{english ? "Scroll" : "Прокрутити"}</h3>
        </a>
        <div className="hero__footer__socials">
          <a href="https://github.com/Arthubnet" target="_blank">
            <GitSvg />
          </a>
          <a href="https://www.linkedin.com/in/artem-trehub/" target="_blank">
            <LinkedinSvg />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
