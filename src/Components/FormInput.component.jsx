import React from "react";
import "./form-input.styles.scss";

function FormInput({ english, labelUa, labelUs, onChange, value, ...rest }) {
  return (
    <div className="form__group">
      <input onChange={onChange} {...rest} className={`form__group__input `} />
      <label className={`${value ? "active" : ""} form__group__label`}>
        {english ? labelUs : labelUa}
      </label>
    </div>
  );
}

export default FormInput;
