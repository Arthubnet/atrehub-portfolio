import React, { useEffect, useRef, useState } from "react";
import "./skill.styles.scss";
import { motion } from "framer-motion";

function Skill({ title, picture, description }) {
  return (
    <motion.div className="skill">
      <div
        style={{
          backgroundImage: `url(${picture})`,
        }}
        className="skill__image"
      >
        {/* <img src={picture} alt=""></img> */}
      </div>
      <div className="skill__title">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      </div>
    </motion.div>
  );
}

export default Skill;
