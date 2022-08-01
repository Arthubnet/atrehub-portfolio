import React, { useState } from "react";
import "./open-page-animation.styles.scss";
/* Motion */
import { motion, AnimatePresence } from "framer-motion";
/* Disble Scroll */
import disableScroll from "disable-scroll";

function OpenPageAnimation({ setPageAnimation }) {
  let onLoad = () => {
    disableScroll.on();
    setTimeout(() => {
      setPageAnimation(false);
      disableScroll.off();
    }, 2500);
  };
  onLoad();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="page-wrapper"
    >
      {/*  <AnimatePresence>
        <motion.div
          key={1}
          initial={{ y: 0 }}
          animate={{ y: "-50vh" }}
          exit={{ scale: 0 }}
          transition={{ duration: 2.5 }}
          className="top-part"
        ></motion.div>
        <motion.div
          key={2}
          initial={{ y: "50vh" }}
          animate={{ y: "100vh" }}
          exit={{ scale: 0 }}
          transition={{ duration: 2.5 }}
          className="bottom-part"
        ></motion.div>
      </AnimatePresence> */}
    </motion.div>
  );
}

export default OpenPageAnimation;
