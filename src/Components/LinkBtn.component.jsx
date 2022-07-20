import React from "react";
import "./link-btn.styles.scss";

function LinkBtn({ link }) {
  return (
    <button className="open-project">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <a className="button-text" href={link} target="_blank">
        Open Project
      </a>
    </button>
  );
}

export default LinkBtn;
