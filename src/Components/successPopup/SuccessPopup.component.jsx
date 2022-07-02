import React from "react";
import "./success-popup.styles.scss";

function SuccessPopup({ setIsLoading }) {
  return (
    <div className="success-popup">
      <div className="success-popup__window">
        <p>Success! I'll reach out to you withing 24 hours.</p>
        <button onClick={() => setIsLoading({ popup: false })}>Ok</button>
      </div>
    </div>
  );
}

export default SuccessPopup;
