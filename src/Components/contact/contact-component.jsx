import React, { useState } from "react";
import FormInput from "../form-input.component";
import Button from "../Button.component";
import "./contact.styles.scss";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [comment, setComment] = useState("");

  let handleChangeName = (e) => {
    setName(e.target.value);
  };
  let handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  let onSubmit = () => {
    console.log("Form submitted");
  };
  return (
    <div className="contact__container">
      <div className="contact__title">
        <h2>Work with me</h2>
        <p>
          Divide details about your product or agency work into parts. Write a
          few lines about each one and contact us about any further
          collaboration. We will responde get back to you in a couple of hours.
        </p>
      </div>
      <div className="contact__form">
        <form onSubmit={onSubmit}>
          <div className="first__two">
            <FormInput
              value={name}
              onChange={handleChangeName}
              type="text"
              name={"Your Name"}
            />
            <FormInput
              value={email}
              onChange={handleChangeEmail}
              type="email"
              name={"Your Email"}
            />
          </div>
          <FormInput
            value={comment}
            onChange={handleChangeComment}
            type="text"
            name={"Your Message"}
          />
          <Button form="form">Send Message</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
