import React, { useState } from "react";
import FormInput from "../form-input.component";
import Button from "../Button.component";
import "./contact.styles.scss";
import { addCollection } from "./../../firebase/firebase.utils";

function Contact({ setIsLoading }) {
  let [user, setUser] = useState({ name: "", email: "", message: "" });
  let { name, email, message } = user;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading({ spinner: true });
    try {
      await addCollection(name, email, message, email);
      setIsLoading({ spinner: false, popup: true });
      Array.from(
        document.querySelectorAll("input").forEach((input) => {
          input.value = "";
        })
      );
    } catch (error) {}
    setUser({
      nameame: "",
      email: "",
      message: "",
    });
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
        <form onSubmit={handleSubmit}>
          <div className="first__two">
            <FormInput
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
              label={"Your Name"}
              required={true}
            />
            <FormInput
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              label={"Your Email"}
              required={true}
            />
          </div>
          <FormInput
            name="message"
            value={message}
            onChange={handleChange}
            type="text"
            label={"Your Message"}
            required={true}
          />
          <Button form="form">Send Message</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
