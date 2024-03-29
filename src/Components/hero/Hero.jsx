import React, { useState, useEffect } from "react";

import "./hero.styles.scss";
import { ReactComponent as GitSvg } from "../../assets/img/github.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/img/linkedin.svg";

import { motion } from "framer-motion";

function Hero({ english }) {
  return (
    <motion.section className="hero">
      <div className="navbar">
        <a href="/">
          <h5 className="logo">{english ? "Trehub A." : "Трегуб А."}</h5>
        </a>
      </div>
      <div className="box-wrapper">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              {english ? "Artem Trehub" : "Трегуб Артем"}
              <span></span>
            </h1>
          </div>
          <div className="role">
            <div className="block"></div>
            <h2>
              <span>React </span>
              {english ? "Web Developer" : "Web-Розробник"}
            </h2>
          </div>
        </div>
      </div>
      {/* Second title for mobiles */}
      <div className="hero__title">
        <h1>{english ? "Artem Trehub" : "Трегуб Артем"}</h1>
        <h2>
          <span>React</span>
          {english ? " Web Developer" : "Web-Розробник"}
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
