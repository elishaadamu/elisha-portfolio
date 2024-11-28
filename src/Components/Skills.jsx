import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Styles/skills.scss";
import Me from "../assets/me.jpg";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.jpeg";
import gsapImg from "../assets/gsap.jpeg";
import html from "../assets/html.png";
import js from "../assets/js.png";
import netlify from "../assets/netlify.png";
import postman from "../assets/postman.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.jpeg";
import tailwind from "../assets/tailwind.jpeg";
import threejs from "../assets/threejs.png";
import ts from "../assets/ts.png";
import zustand from "../assets/zustand.jpeg";
import firebase from "../assets/firebase.png";
import jekyll from "../assets/jekyll.png";
import md from "../assets/md.png";
import rq from "../assets/rq.jpeg";
import swiper from "../assets/swiper.jpeg";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const skills = [
        {
            skillImg: html,
            skillName: "HTML",
        },
        {
            skillImg: css,
            skillName: "CSS",
        },
        {
            skillImg: js,
            skillName: "JavaScript",
        },
        {
            skillImg: ts,
            skillName: "TypeScript",
        },
        {
            skillImg: react,
            skillName: "React Js",
        },
        {
            skillImg: jekyll,
            skillName: "Jekyll ",
        },
        {
            skillImg: md,
            skillName: "Markdown",
        },
        {
            skillImg: redux,
            skillName: "Redux",
        },
        {
            skillImg: tailwind,
            skillName: "Tailwind CSS",
        },

        {
            skillImg: firebase,
            skillName: "Firebase ",
        },
        {
            skillImg: gsapImg,
            skillName: "Gsap ",
        },
        {
            skillImg: postman,
            skillName: "Postman ",
        },
        {
            skillImg: sass,
            skillName: "sass ",
        },

        {
            skillImg: git,
            skillName: "Git ",
        },
        {
            skillImg: github,
            skillName: "Github",
        },

        {
            skillImg: netlify,
            skillName: "Netlify ",
        },
        {
            skillImg: rq,
            skillName: " React Query",
        },
        {
            skillImg: swiper,
            skillName: "Swiper Js",
        },
    ];

    const refs = useRef(skills.map(() => React.createRef()));
    const desktopRefs = useRef(skills.map(() => React.createRef()));

    // FOR MOBILE VIEW
    useEffect(() => {
        refs.current.forEach((ref, index) => {
            gsap.fromTo(
                ref.current,
                { x: 200, y: -40, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    // duration: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 110%",
                        end: "bottom center",
                        scrub: true,
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    // FOR DESKTOP VIEW
    useEffect(() => {
        desktopRefs.current.forEach((ref, index) => {
            gsap.fromTo(
                ref.current,
                { x: 200, y: -40, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: "back.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="skills" id="skills">
            <div className="container">
                <h2>My Skills</h2>
                <p>
                    Throughout my journey, I have developed myself in various
                    aspects of frontend development, mastering the skills
                    necessary to deliver exceptional and innovative web
                    solutions.
                </p>

                <h3>Technological Proficiencies</h3>

                <div className="techs desktop">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="tech"
                            ref={desktopRefs.current[i]}
                        >
                            <img src={skill.skillImg} />
                            <p>{skill.skillName}</p>
                        </div>
                    ))}
                </div>

                <div className="techs mobile">
                    {skills.map((skill, i) => (
                        <div key={i} className="tech" ref={refs.current[i]}>
                            <img src={skill.skillImg} />
                            <p>{skill.skillName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
