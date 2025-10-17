import React, { useState } from "react";
import alvocine from "../assets/alvocine.png";
import lifewithalacrity from "../assets/lifewithalacrity.png";
import sportstechwest from "../assets/sportstechwest.png";
import portfolio from "../assets/portfolio.png";
import AYCreativeTech from "../assets/ay-creatives.png";
import "./Styles/portfolio.scss";
import Project from "./Project";
import CMP from "../assets/CMPPerformanceMeasures.png";
import TRICITIES from "../assets/tri-cities.png";

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
      index: "04",
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
      workImg: CMP,
      name: "CMP Performance Measures",
      index: "05",
      tags: ["html", "css", "React", "D3", "Tailwindcss", "GitHub"],
      link: "https://cmp-dash.netlify.app/",
      github: "https://github.com/elishaadamu/CMP-Performance-Measures",
      features: ["Population Chart", "D3 Visualisation", "Software Solutions"],
      description: `This utilises CSV data to draw charts to represent the data`,
    },
    {
      workImg: TRICITIES,
      name: "Tri-Cities Area MPO Performance Tracker",
      index: "06",
      tags: ["html", "css", "React", "D3", "Tailwindcss", "GitHub"],
      link: "https://cpdcperftracker.netlify.app/",
      github: "https://github.com/elishaadamu/cpdc_perf_tracker",
      features: ["Population Chart", "D3 Visualisation", "Software Solutions"],
      description: `This utilises CSV data to draw charts to represent the data`,
    },
  ];

  const handleWork = (w) => {
    setClickedWork(w);
    setShowWorkDetails(true);
  };

  const truncateWords = (text, limit = 20) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="container">
          <h2>Portfolio Showcase</h2>

          <div className="works">
            {works.map((work, i) => (
              <div
                className="work"
                key={i}
                onClick={() => handleWork(work)}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="work-img">
                  <a>
                    <img src={work.workImg} alt={work.name} />
                  </a>

                  <div className="work-num">
                    <span>{work.index}</span>
                  </div>
                </div>

                <div className="work-details">
                  <p className="my-10 text-center text-2xl font-bold ">
                    {work.name}
                  </p>
                  <div className="desc">
                    <button>View Project</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showWorkDetails && (
        <Project
          project={clickedWork}
          setShowWorkDetails={setShowWorkDetails}
        />
      )}
    </>
  );
}

export default Portfolio;
