import React from "react";
import "./button.styles.scss";

function Button({ children, form, link }) {
  return (
    <>
      <button className={`${form ? "form" : ""} fancy`}>
        <span className="top-key"></span>
        <a href={link ? link : null} target="_blank">
          {children}
        </a>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </>
  );
}

export default Button;
