import React from "react";
import "./form-input.styles.scss";

function FormInput({ name, type, onChange, value }) {
  return (
    <div className="form__group">
      <input
        onChange={onChange}
        type={type}
        className={` form__group__input `}
      />
      <label className={`${value ? "active" : ""} form__group__label`}>
        {name}
      </label>
    </div>
  );
}

export default FormInput;
