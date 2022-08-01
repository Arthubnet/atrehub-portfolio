import React, { useRef } from "react";
import "./about-page.styles.scss";

import SkillsPreview from "./SkillsPreview.component";

import { ReactComponent as GitIcon } from "../../assets/img/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/img/linkedin.svg";
import { ReactComponent as ReactIcon } from "../../assets/img/react.svg";
import { ReactComponent as JsIcon } from "../../assets/img/js.svg";
import { ReactComponent as CSSIcon } from "../../assets/img/css3.svg";

import myself from "../../assets/img/pic.jpg";

import { motion, useInView } from "framer-motion";

function About({ english }) {
  let previews = [
    {
      title: english ? "Best Skill On:" : "Кращі навички у:",
      icons: [
        { icon: ReactIcon, alt: "react-icon", size: "large" },
        { icon: JsIcon, alt: "javascript-icon", size: "large" },
        { icon: CSSIcon, alt: "css-icon", size: "large" },
      ],
    },

    /*     {
      title: "Get In Touch",
      icons: [
        {
          icon: GitIcon,
          link: "https://github.com/Arthubnet",
          alt: "github-icon",
        },
        {
          icon: LinkedinIcon,
          link: "https://www.linkedin.com/in/artem-trehub/",
          alt: "linkedin-icon",
        },
      ],
    }, */
  ];

  /* Motion */
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: isInView ? 0 : -100,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 1.9,
            delay: 0.35,
          }}
          className="about__picture"
        >
          <img src={myself}></img>
          <ul>
            <li>
              <a href="https://github.com/Arthubnet" target="_blank">
                <GitIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/artem-trehub/ "
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: -130, opacity: 0 }}
          animate={{ x: isInView ? 0 : -130, opacity: isInView ? 1 : 0 }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 1.9,
            delay: 0,
          }}
          className="about__title"
        >
          <h2>
            {english ? "Artem Trehub" : "Трегуб Артем"}
            <span></span>
          </h2>
          <h3>{english ? "React Web Developer" : "React Web-Розробник"}</h3>
          <p ref={ref}>
            {english
              ? `My Web path started 12 years ago as Digital Marketing Manager, also
            ran own marketing business based in Ukraine, Kyiv that operated
            within Post-Soviet countries for 5 years. User experience and
            psychology in general was always my passion, but working with
            developers woke up a new desire to code. After creating my first
            website I can't stop coding, at the moment primarily create web apps
            through JS React, but also have experience in
            developing full stack applications. To learn more, take a look at my
            latest projects below.`
              : `Мій шлях у Web почався 12 років потому у ролі Web Маркетолога, володів маркетинговою компанією оперуючою у колишніх странах СНГ на протязі 5 років. Я завжди захоплювався психологією і маркетингом, але щобільше я працював із розробниками, тим більше зьявлялось бажання кодити та створювати свої програми. На данний момент у більшості я користуюсь React бібліотекою, але також маю досвід з full stack розробкою. Щоб дізнатися більше, познайомтеся з моїми проектами нижче.  `}
          </p>
          <div className="about__previews">
            {previews.map(({ title, icons }, index) => (
              <SkillsPreview key={index} title={title} icons={icons} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
