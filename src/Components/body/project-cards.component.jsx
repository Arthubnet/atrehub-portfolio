import React from "react";
import Card from "./card.component";
import "./project-cards.styles.scss";

import pictureAPI from "./img/API2.png";
import pictureAuth from "./img/auth2.jpeg";
import pictureJs from "./img/Javascript1.jpg";

class ProjectsCards extends React.Component {
  state = {
    card: [
      {
        type: "html + Css",
        title: "Autodesk looks to future of 3D printing with Project Escher",
        paragrapth:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Read More.",
        img: pictureJs,
        color: "#00acc1",
      },
      {
        type: "python API",
        title: "Lyft launching cross-platform service this week",
        paragrapth:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Read More.",
        img: pictureAPI,
        color: "#4caf50",
      },
      {
        type: "Redux, authentication",
        title: "6 insights into the French Fashion landscape",
        paragrapth:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Read More.",
        img: pictureAuth,
        color: "#f44336",
      },
    ],
  };
  render() {
    return (
      <div className="body__projects">
        <h2>Check my Projects</h2>
        <div className="body__projects__cards">
          {this.state.card.map(
            ({ type, title, paragrapth, img, color }, index) => (
              <Card
                key={index}
                type={type}
                title={title}
                paragrapth={paragrapth}
                img={img}
                color={color}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default ProjectsCards;
