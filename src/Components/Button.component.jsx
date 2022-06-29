import React from "react";
import "./button.styles.scss";

function Button({ children, form, cv }) {
  return (
    <button className={`${form ? "form" : ""} ${cv ? "cv" : ""} btn`}>
      {children}
    </button>
  );
}

export default Button;
