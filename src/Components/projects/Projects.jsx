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
import gymShark from "../../assets/img/Gymshark.jpg";
import hud from "../../assets/img/hud.jpg";
import hotTopic from "../../assets/img/HotTopic.png";

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
          { skill: "TypeScript" },
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
      /* {
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
      }, */
      {
        tech: "iOS, Android",
        title: "Gymshark - Fitness app",
        us: `<p key={1}>
                  There's a better way to train, and it's just an app away. Find home workouts at your fingertips. Discover an entire library of home and gym workouts so you're never stuck in a rut again. Customise and personalise your own exercise training plan with moves to suit you.

                  Create home or gym workout routines that work for you, your goals and your lifestyle, customise your own workout using Gymshark’s extensive exercise library, or make today the day you start an athlete plan. You can even check out our top 10 workouts of the day and always know what's trending in the training world. Whatever your goal, at the gym or home, there's a workout for you.
                </p>`,
        ua: `<p key={1}>Редизайн вебсайта Billboard, з моїм авторським <span>Музикальним плеєром</span> котрий надає можливість прослуховувати музику під час використання та перегляду сайта. Цей проект був створений виключно для портфоліо, тому об'ємні секціі заповнені випадковим текстом. Сайт адаптивний для мобільніх пристроїв</p>`,
        image: gymShark,
        color: "#00acc1",
        link: "https://www.gymshark.com/",
        github: "",
        gif: gymShark,
        skills: [
          { skill: "iOS" },
          { skill: "Android" },
          { skill: "React-Native" },
          { skill: "JavaScript" },
          { skill: "TypeScript" },
          { skill: "Swift" },
          { skill: "Kotlin" },
          { skill: "Firebase" },
          { skill: "Node.js" },
          { skill: "React" },
          { skill: "MongoDB" },
        ],
      },
      {
        tech: "iOS, Android",
        title: "Social Networking App",
        us: `<p key={1}>
                  HUD™ app is a casual dating app that is honest about the realities of online dating.
                  HUD™ Specific Features:
                  Video chat with auto blur safety feature
                  Send and receive videos, photos, and audio messages
                  Female-friendly chat features
                  Photo Protection Blur
                  Advanced search options
                </p>`,
        ua: `<p key={1}>Редизайн вебсайта Billboard, з моїм авторським <span>Музикальним плеєром</span> котрий надає можливість прослуховувати музику під час використання та перегляду сайта. Цей проект був створений виключно для портфоліо, тому об'ємні секціі заповнені випадковим текстом. Сайт адаптивний для мобільніх пристроїв</p>`,
        image: hud,
        color: "#00acc1",
        link: "https://www.hudapp.com/",
        github: "",
        gif: hud,
        skills: [
          { skill: "iOS" },
          { skill: "Android" },
          { skill: "Swift" },
          { skill: "Java" },
          { skill: "Firebase" },
          { skill: "WebRTC" },
          { skill: "Twillio" },
          { skill: "TypeScript" },
          { skill: "Kotlin" },
        ],
      },
      {
        tech: "iOS, Android",
        title: "Shopping App",
        us: `<p key={1}>
                  Shop your favorite Hot Topic merch wherever you are with the revamped Hot Topic app! It's now easier than ever to browse our huge selection of officially licensed music and pop culture merch for all fandoms. Whether you want new tees or fresh hoodies, the latest fashion trends for guys, girls and plus sizes, band merch to turn up your look, anime styles you can wear head to toe, the coolest Funko drops and collectibles, home décor items, or mini backpacks and jewelry for your 'fit — we've got it.
                </p>`,
        ua: `<p key={1}>Редизайн вебсайта Billboard, з моїм авторським <span>Музикальним плеєром</span> котрий надає можливість прослуховувати музику під час використання та перегляду сайта. Цей проект був створений виключно для портфоліо, тому об'ємні секціі заповнені випадковим текстом. Сайт адаптивний для мобільніх пристроїв</p>`,
        image: hotTopic,
        color: "#00acc1",
        link: "https://www.hottopic.com/",
        github: "",
        gif: hotTopic,
        skills: [
          { skill: "iOS" },
          { skill: "Android" },
          { skill: "React-Native" },
          { skill: "TypeScript" },
          { skill: "Swift" },
          { skill: "Kotlin" },
          { skill: "Firebase" },
          { skill: "PHP" },
          { skill: "MySQL" },
        ],
      },

      /* {
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
      }, */
    ],
  };
  render() {
    const { english } = this.props;
    return (
      <section className="projects">
        <div className="container">
          {/*  <h2 className="project-title">Projects</h2> */}
          {this.state.card.map(
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
