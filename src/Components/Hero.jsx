import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Styles/hero.scss";
import Me from "../assets/elisha.jpg";
import { Link } from "react-scroll";
import Text from "./Text";
import cv from "../assets/Elisha-Adamu-Inuwa.pdf";

function Hero() {
    const div1 = useRef(null);
    const div2 = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline
            .fromTo(
                div1.current,
                {
                    opacity: 0,
                    visibility: "hidden",
                    y: -100,
                },
                {
                    opacity: 1,
                    visibility: "visible",
                    y: 0,
                    duration: 0.5,
                }
            )
            .fromTo(
                div2.current,
                {
                    opacity: 0,
                    visibility: "hidden",
                    y: -100,
                },
                {
                    opacity: 1,
                    visibility: "visible",
                    y: 0,
                    duration: 0.5,
                },
                "+=0.2"
            );
    }, []);

    return (
        <div className="hero" id="hero">
            <div className="container">
                <div className="left-col" ref={div1}>
                    <h1>Hi, I'm Adamu Elisha Inuwa</h1>
                    <Text />
                    <p>
                        Specializing in creating sleek, responsive, and
                        user-friendly web applications. Dedicated to delivering
                        seamless user experiences with a focus on innovative
                        design, attention to detail, and ensuring your website
                        stands out and engages your audience.
                    </p>

                    <div className="btns">
                    <a href={cv} download>CV</a>
                        <Link
                            to="contact"
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            let's talk
                        </Link>
                    </div>
                </div>

                <div className="right-col" ref={div2}>
                    <div className="container">
                        <img src={Me} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
