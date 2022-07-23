import React from "react";
import "./button.styles.scss";

function Button({ children, form, link }) {
  return (
    <>
      <button className={`${form ? "form" : ""} fancy`}>
        <span class="top-key"></span>
        <a href={link ? link : null} target="_blank">
          {children}
        </a>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </button>
    </>
  );
}

export default Button;
