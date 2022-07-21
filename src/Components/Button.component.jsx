import React from "react";
import "./button.styles.scss";

function Button({ children, form, link }) {
  return (
    <>
      {form ? (
        <button className={`${form ? "form" : ""} btn`}>{children}</button>
      ) : (
        <a href={link} target="_blank" className="btn">
          {children}
        </a>
      )}
    </>
  );
}

export default Button;
