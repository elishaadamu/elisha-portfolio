import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import alvocine from "../assets/alvocine.png";
import lifewithalacrity from "../assets/lifewithalacrity.png";
import sportstechwest from "../assets/sportstechwest.png";
import portfolio from "../assets/portfolio.png";
import AYCreativeTech from "../assets/ay-creatives.png";
import "./Styles/portfolio.scss";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const [clickedWork, setClickedWork] = useState(null);
  const [showWorkDetails, setShowWorkDetails] = useState(false);

  const works = [
    {
      workImg: alvocine,
      name: "alvocine",
      index: "01",
      tags: [
        "html",
        "css",
        "sass",
        "javaScript",
        "react",
        "IMDB",
        "react query",
        "react player",
      ],
      link: "https://alvocine.netlify.app/",
      github: "#",
      features: [
        "get movies list",
        "watch movie trailer",
        "search movies",
        "get movie details",
        "get upcoming movies",
        "",
      ],
      description: `Alvocine: A dynamic movie recommendation application built with React. Alvocine provides users with personalized movie suggestions based on their preferences and viewing history. The application features a sleek and user-friendly interface, seamless navigation, and real-time updates to enhance the user experience. Integrated with external APIs, Alvocine offers a rich database of movies, including detailed information and reviews. This project demonstrates strong skills in React development, API integration, and UI/UX design.`,
    },
    {
      workImg: lifewithalacrity,
      name: "Life with Alacrity",
      index: "02",
      tags: ["html", "css", "sass", "javaScript", "jekyll", "Ruby"],
      link: "https://www.lifewithalacrity.com/",
      github: "https://github.com/lifewithalacrity/www.LifeWithAlacrity.com",
      features: ["Blog", "Archive", "Security Architecture"],
      description: `Life with Alacrity is the personal blog of Christopher Allen, covering topics of community, decentralized identity, collective choice, online privacy, and more. `,
    },
    {
      workImg: sportstechwest,
      name: "Sports Tech West",
      index: "03",
      tags: [
        "html",
        "css",
        "sass",
        "javaScript",
        "jekyll",
        "firebase",
        "redux",
      ],
      link: "https://sportstechwest.com/",
      github: "https://github.com/rashadwest/Sportstechwest",
      features: ["Sports", "Athletic", "Digital"],
      description: `SportsTechWest, a blog exploring the journey from professional athlete to sports tech vagabonder. Join us in discovering the global intersection of sports and technology.`,
    },
    {
      workImg: AYCreativeTech,
      name: "AY Creative Technologies",
      index: "03",
      tags: ["html", "css", "React", "Ant UI", "Tailwindcss", "GitHub"],
      link: "https://ay-creative-tech.netlify.app/",
      github: "https://github.com/elishaadamu/ay-creative-tech",
      features: [
        "BVN Verifications",
        "NIN Verifications",
        "Software Solutions",
      ],
      description: `Trusted platform providing secure verification including Nin,Bvn and documents modification, Our mission is to offer reliable,fast, and accurate verification solutions to help you with your personal and business needs.`,
    },

    {
      workImg: portfolio,
      name: "Portfolio",
      index: "04",
      tags: [
        "html",
        "css",
        "sass",
        "Gsap",
        "yup",
        "react-hook-form",
        "javaScript",
        "and more...",
      ],
      link: "#",
      github: "#",
      features: [
        "Visual Design",
        " Certifications",
        "Responsive Design",
        "resume/CV",
        "Skills",
        "and more...",
      ],
      description: `Personal Portfolio: An interactive portfolio showcasing my skills as a frontend web developer. Built with React and enhanced with GSAP animations, it features projects like AlvoChat and Alvocine, demonstrating my expertise in creating dynamic and responsive web applications.

`,
    },
  ];

  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Horizontal scroll for the children
    gsap.to(scrollContainer.children, {
      xPercent: -140 * (scrollContainer.children.length - 1), //AJUST TO YA TASTE
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollContainer.scrollWidth}`,
        // onEnter: () => (document.body.style.overflowY = "auto"),
        // onLeave: () => (document.body.style.overflowY = "auto"),
        // onEnterBack: () => (document.body.style.overflowY = "auto"),
        // onLeaveBack: () => (document.body.style.overflowY = "auto"),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleWork = (w) => {
    setClickedWork(w);
    setShowWorkDetails(true);
  };

  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="container">
          <h2>Portfolio Showcase</h2>

          <div
            className="works"
            ref={scrollContainerRef}
            style={{
              marginTop: "4rem",
              display: "flex",
              overflowX: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {works.map((work, i) => (
              <div className="work" key={i} onClick={() => handleWork(work)}>
                <div className="work-img">
                  <a>
                    <img src={work.workImg} />
                  </a>

                  <div className="work-num">
                    <span>{work.index}</span>
                  </div>
                </div>

                <div className="work-details">
                  <div className="work-num">
                    <span>{work.index}</span>
                  </div>

                  <div className="desc">
                    <p>{work.description}</p>

                    <button>Veiw Project</button>
                  </div>
                </div>
                <h3>{work.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showWorkDetails ? (
        <Project
          project={clickedWork}
          setShowWorkDetails={setShowWorkDetails}
        />
      ) : null}
    </>
  );
}

export default Portfolio;
