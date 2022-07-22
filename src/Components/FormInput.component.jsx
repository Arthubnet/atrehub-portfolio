import React from "react";
import "./form-input.styles.scss";

function FormInput({ label, onChange, value, size, ...rest }) {
  return (
    <div className="form__group">
      <input
        onChange={onChange}
        {...rest}
        className={` ${size ? "large" : ""} form__group__input `}
      />
      <label className={`${value ? "active" : ""} form__group__label`}>
        {label}
      </label>
    </div>
  );
}

export default FormInput;
