import React from "react";
import { Component } from "react";
import ProjectCard from "./ProjectCard.component";
import "./projects.styles.scss";

import copyboardGif from "../../assets/img/copy180s.gif";
import fredGif from "../../assets/img/fred.gif";
import galleryGif from "../../assets/img/gallery.gif";
import billboard from "../../assets/img/billboard2.jpg";
import fred from "../../assets/img/fred.jpg";
import gallery from "../../assets/img/gallery.jpg";

class Projects extends Component {
  state = {
    card: [
      {
        tech: "Front-End",
        title: "Copyboard",
        us: `<p key={1}>
                  Redesign of Billboard website, with my own
                  <span>Music player</span> that provides all the
                  needed functionality to listen to music while reading news and
                  serfing the website. The project was made only for the
                  portfolio so news are not filled with actual data. Mobile
                  responsive.
                </p>`,
        ua: `<p key={1}>Редизайн вебсайта Billboard, з моїм авторським <span>Музикальним плеєром</span> котрий надає можливість прослуховувати музику під час використання та перегляду сайта. Цей проект був створений виключно для портфоліо, тому об'ємні секціі заповнені випадковим текстом. Сайт адаптивний для мобільніх пристроїв</p>`,
        image: billboard,
        color: "#00acc1",
        link: "https://copyboard.herokuapp.com/",
        github: "https://github.com/Arthubnet/copyboard",
        gif: copyboardGif,
        skills: [
          { skill: "Next.js" },
          { skill: "React.js" },
          { skill: "JavaScript" },
          { skill: "SCSS" },
          { skill: "Framer Motion" },
          { skill: "Styled-Components" },
          { skill: "HTML" },
        ],
      },
      {
        tech: "Full Stack",
        title: "E-Commerce",
        us: `
          <p key={2}>
            E-commerce project on React. Well designed Components with Redux
            state management makes the app scalable to any production size.
            Personalised cart, Payment system and Efficient routing provides
            great <span>UX</span>. Mobile adaptive.</p>`,
        ua: `<p key={2}>Редизайн вебсайта Billboard, з моїм авторським <span>JavaScript музикальним плеєром</span> котрий надає можливість прослуховувати музику під час використання та перегляду сайта. Цей проект був створений виключно для портфоліо, тому об'ємні секціі заповнені випадковим текстом. електронна комерція</p>`,
        image: fred,
        color: "#f44336",
        link: "https://fred-ecommerce-project.herokuapp.com/",
        github: "https://github.com/Arthubnet/cloth-e-commerce",
        gif: fredGif,
        skills: [
          { skill: "React.js" },
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
        us: `<p key={3}>
            MERN stack app that retrieves random images from Unsplash API based
            on search input and provides the feature to save/delete specific
            image to/from our MongoDB database. The app fetches DB through our
            <span>REST API</span> on load and returns saved pictures if any
            exists. There is same version with Python backend and Docker
            containers on <a href="https://github.com/Arthubnet/images-gallery-python" target="_blank">GitHub</a>.
          </p>`,

        ua: `<p key={3}>MERN stack програма котра повертає випадкові фото з Unspash API в залежності від запиту та надає можливість зберігати/видаляти конкретні фото в/з MongoDB базу данних. Після завантаження програма автоматично кидає запит до бази даних через наш <span>REST API</span> та повертає збережені фото якщо такі існують. У моєму <a href="https://github.com/Arthubnet/images-gallery-python" target="_blank">GitHub</a> існує близька копія програми але написана нa Python та з використанням Docker контейнерів.</p>`,
        image: gallery,
        color: "#4caf50",
        link: "https://images-gallery-frontend.herokuapp.com/",
        github: "https://github.com/Arthubnet/images-gallery-frontend",
        gif: galleryGif,
        skills: [
          { skill: "React.js" },
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
        us: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
        ua: `<p key={1}>E-commerce проект на React. Грамотно сформовані Компоненти за допомогою Redux state management надають можливість використовувати данний проект на будь язих масштабах. Персоналізований візок, Платіжна система та Еффективний роутінг роблять сайт логічним для використання користувачу.</p>`,
        image: "",
        color: "#344767",
        link: "",
        github: "",
        gif: fredGif,
        skills: [{ skill: "HTML" }, { skill: "CSS" }, { skill: "JavaScript" }],
      },
    ],
  };
  render() {
    const { english } = this.props;
    return (
      <section className="projects">
        <div className="container">
          {/*  <h2 className="project-title">Projects</h2> */}
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
                  ua,
                  us,
                },
                index
              ) => (
                <ProjectCard
                  english={english}
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
                  ua={ua}
                  us={us}
                />
              )
            )}
        </div>
      </section>
    );
  }
}

export default Projects;
