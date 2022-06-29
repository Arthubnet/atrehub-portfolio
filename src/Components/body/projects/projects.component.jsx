import React from "react";
import { Component } from "react";
import ProjectCard from "./project-card.component";
import "./projects.styles.scss";

import api from "../img/API2.png";
import js from "../img/Javascript1.jpg";
import auth from "../img/auth2.jpeg";
import game from "../img/game.jpg";
class Project extends Component {
  state = {
    card: [
      {
        title: "HTML, CSS, JS",
        description:
          "Redesign of Billboard website, using JS + SCSS, no libraries and toolkits were used",
        image: js,
        color: "#00acc1",
      },
      {
        title: "React + Python API",
        description:
          "React Image gallery app created with my own Python API that communicates to Unsplash API",
        image: api,
        color: "#4caf50",
      },
      {
        title: "React: Redux, Authentication",
        description:
          "E-commerce project on React. Redux state management, Firebase DB and Authentication.",
        image: auth,
        color: "#f44336",
      },
      {
        title: "Coming soon",
        description:
          "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
        image: game,
        color: "#344767",
      },
    ],
  };
  render() {
    return (
      <div className="project__section">
        <h2>Check my Projects</h2>
        <div className="project__section__container">
          {this.state.card.map(
            ({ title, description, image, color }, index) => (
              <ProjectCard
                key={index}
                title={title}
                description={description}
                image={image}
                color={color}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Project;