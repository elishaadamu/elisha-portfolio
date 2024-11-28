import React from "react";
// import Me from "../assets/me.jpg";
import "./Styles/about.scss";

function About() {
    const myDetails = [
        {
            heading: "My Journey",
            detail: `With a keen eye for design and a dedication to creating seamless user experiences, I specialize in crafting visually appealing and highly functional websites. My journey in web development started with a curiosity for how things work on the web, which quickly turned into a full-fledged passion for building interactive and engaging digital experiences.`,
        },
        {
            heading: "My Approach",
            detail: `Over the years, I've honed my skills in various aspects of frontend development, from designing intuitive interfaces to optimizing performance and ensuring cross-browser compatibility. I believe in the power of clean, efficient code and innovative design to solve complex problems and bring ideas to life.`,
        },
        {
            heading: "Why Hire Me",
            detail: `My dedication to continuous learning and staying updated with the latest trends in technology ensures that I bring the best practices to every project. I am committed to delivering high-quality work that meets your specific needs and exceeds your expectations. Whether it's a small website update or a large-scale project, I approach each task with the same level of enthusiasm and attention to detail.`,
        },
        {
            heading: "Let's Connect",
            detail: `Feel free to explore my portfolio to see some of my work, and don't hesitate to reach out if you'd like to collaborate or have any questions. Together, we can create something amazing!`,
        },
    ];

    return (
        <div className="about" id="about">
            <div className="container">
                <h2>About Me</h2>

                <div className="my-info">
                    <div className="my-img">
                        <img
                            src={
                                "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1718024953~exp=1718028553~hmac=0bd93a854c2277aa7c72008733a452d6fa829c4db8ca15f88464da93dc4c6e05&w=740"
                            }
                            alt="me"
                        />
                    </div>

                    <div className="details">
                        {myDetails.map((detail, i) => (
                            <div key={i} className="detail">
                                <h3>{detail.heading}</h3>
                                <p>{detail.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
