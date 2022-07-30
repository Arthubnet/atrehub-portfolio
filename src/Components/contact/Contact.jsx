import React, { useState, useRef } from "react";
import FormInput from "../FormInput.component";
import Button from "../Button.component";
import "./contact.styles.scss";
import { addCollection } from "../../firebase/firebase.utils";
/* Framer Motion */
import { useInView } from "framer-motion";

function Contact({ setIsLoading, english }) {
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

  /* Framer */
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="contact">
      <div
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s ease-out ",
        }}
        className="contact__container"
      >
        <div className="contact__title">
          <h2>{english ? "Work with me" : "Давайте поспілкуємось"}</h2>
          <p>
            {english
              ? "Always available for freelancing if the right project comes along. Feel free to contact me."
              : "Завжди відкритий до фрілансу та нових проектів. Напишіть мені якщо з'явились  питання. "}
          </p>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <div ref={ref} className="first__two">
              <FormInput
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                labelUs={"Your Name"}
                labelUa={"Ваше ім'я"}
                required={true}
              />
              <FormInput
                name="email"
                value={email}
                onChange={handleChange}
                type="email"
                labelUs={"Your Email"}
                labelUa={"Ваш Email"}
                required={true}
              />
            </div>
            <FormInput
              name="message"
              value={message}
              onChange={handleChange}
              type="text"
              labelUs={"Your Message"}
              labelUa={"Ваше повідомлення"}
              required={true}
            />
            <Button form="form">
              {english ? "Send Message" : "Відправити повідомлення"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
