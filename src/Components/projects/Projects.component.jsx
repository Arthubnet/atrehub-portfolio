import React from "react";
import { Component } from "react";
import ProjectCard from "./ProjectCard.component";
import "./projects.styles.scss";

import mern from "../../assets/img/mern.jpg";
import rrf from "../../assets/img/rrf.jpg";
import vanillajs from "../../assets/img/vanillajs.png";

class Project extends Component {
  state = {
    card: [
      {
        title: "HTML, JS, SCSS",
        description:
          "Redesign of Billboard website, using JS + SCSS, no libraries and toolkits were used",
        image: vanillajs,
        color: "#00acc1",
        link: "https://copyboard.herokuapp.com/",
        github: "https://github.com/Arthubnet/billboard-redesign",
      },
      {
        title: "MERN(MongoDB, Express, React, Node.js)",
        description:
          "Full stack image-gallery app based on MERN and Unsplash API. Used Bootstrap for simplicity.",
        image: mern,
        color: "#4caf50",
        link: "https://images-gallery-frontend.herokuapp.com/",
        github: "https://github.com/Arthubnet/images-gallery-frontend",
      },
      {
        title: "React: Redux, Firebase: Database & Authentication",
        description:
          "E-commerce project on React. Redux state management, Firebase DB and Authentication, Stripe payment system",
        image: rrf,
        color: "#f44336",
        link: "https://fred-ecommerce-project.herokuapp.com/",
        github: "https://github.com/Arthubnet/cloth-e-commerce",
      },
      {
        title: "Coming soon",
        description:
          "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
        image: "",
        color: "#344767",
        link: "",
        github: "",
      },
    ],
  };
  render() {
    return (
      <div className="project__section">
        <h2>Check my Projects</h2>
        <div className="project__section__container">
          {this.state.card
            .filter((item, index) => index < 3)
            .map(
              ({ title, description, image, color, link, github }, index) => (
                <ProjectCard
                  key={index}
                  title={title}
                  description={description}
                  image={image}
                  color={color}
                  link={link}
                  github={github}
                />
              )
            )}
        </div>
      </div>
    );
  }
}

export default Project;
