import React from "react";
import { Component } from "react";
import ProjectCard from "./ProjectCard.component";
import "./projects.styles.scss";

import jsgit from "../../assets/img/js.gif";
import eCommerce from "../../assets/img/egif.gif";
import imgGalery from "../../assets/img/ggif.gif";
import billboard from "../../assets/img/billboard2.jpg";
import fred from "../../assets/img/fred3.jpg";
import gallery from "../../assets/img/gallery.jpg";

class Project extends Component {
  state = {
    card: [
      {
        tech: "Frontend",
        title: "Copyboard",
        description: [
          <p>
            Redesign of Billboard website, with my own{" "}
            <span>JavaScript music player</span> that provides all the needed
            functionality to listen to music while reading news and serfing the
            website. The project was made only for the portfolio so news are not
            filled with actual data. Mobile responsive.
          </p>,
        ],
        image: billboard,
        color: "#00acc1",
        link: "https://copyboard.herokuapp.com/",
        github: "https://github.com/Arthubnet/billboard-redesign",
        gif: jsgit,
        skills: [{ skill: "JavaScript" }, { skill: "CSS" }, { skill: "HTML" }],
      },
      {
        tech: "Full Stack",
        title: "Fred E-Commerce",
        description: [
          <p>
            E-commerce project on React. Well designed Components with Redux
            state management makes the app scalable to any production size.
            Personalised cart, Payment system and Efficient routing provides
            great <span>UX</span>. Mobile adaptive."
          </p>,
        ],
        image: fred,
        color: "#f44336",
        link: "https://fred-ecommerce-project.herokuapp.com/",
        github: "https://github.com/Arthubnet/cloth-e-commerce",
        gif: eCommerce,
        skills: [
          { skill: "React" },
          { skill: "Redux" },
          { skill: "JavaScript" },
          { skill: "Firebase" },
          { skill: "Authentication" },
          { skill: "Storage Session" },
          { skill: "Stripe" },
          { skill: "SASS" },
          { skill: "HTML" },
        ],
      },
      {
        tech: "MERN Stack",
        title: "Images Gallery",
        description: [
          <p>
            MERN Stack app that retrieves random images from Unsplash API based
            on search input and provides the feature to save/delete specific
            image to/from our MongoDB database. The app fetches DB through our{" "}
            <span>REST API</span> on load and returns saved pictures if any
            exists. There is same version with Python backend and Docker
            containers on GitHub.
          </p>,
        ],
        image: gallery,
        color: "#4caf50",
        link: "https://images-gallery-frontend.herokuapp.com/",
        github: "https://github.com/Arthubnet/images-gallery-frontend",
        gif: imgGalery,
        skills: [
          { skill: "React" },
          { skill: "JavaScript" },
          { skill: "Node.js" },
          { skill: "Express.js" },
          { skill: "REST API" },
          { skill: "MongoDB" },
          { skill: "Docker" },
          { skill: "Unsplash API" },
          { skill: "CRUD" },
          { skill: "CSS" },
          { skill: "Bootstrap" },
        ],
      },

      {
        tech: "MERN Stack",
        title: "Coming soon",
        description:
          "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
        image: "",
        color: "#344767",
        link: "",
        github: "",
        gif: imgGalery,
        skills: [{ skill: "HTML" }, { skill: "CSS" }, { skill: "JavaScript" }],
      },
    ],
  };
  render() {
    return (
      <div className="project__section">
        <div className="project__section__container">
          {/* <h2 className="project-title">Projects</h2> */}
          {this.state.card
            .filter((item, index) => index < 3)
            .map(
              (
                {
                  title,
                  description,
                  image,
                  color,
                  link,
                  github,
                  gif,
                  tech,
                  skills,
                },
                index
              ) => (
                <ProjectCard
                  key={index}
                  title={title}
                  description={description}
                  image={image}
                  color={color}
                  link={link}
                  github={github}
                  gif={gif}
                  tech={tech}
                  skills={skills}
                />
              )
            )}
        </div>
      </div>
    );
  }
}

export default Project;
