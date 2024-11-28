import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import gsap from "gsap";
import "./Styles/project.scss";

function Project({ project, setShowWorkDetails }) {
    const projectRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            projectRef.current,
            { y: "-50%", opacity: 0 },
            { y: 0, opacity: 1, ease: "bounce.out", duration: 1 }
        );
    }, []);

    const close = () => {
        gsap.to(projectRef.current, { y: "-50%", opacity: 0 });

        setTimeout(() => {
            setShowWorkDetails(false);
        }, 300);
    };

    return (
        <div onClick={close} className="project-details">
            <div
                onClick={(e) => e.stopPropagation()}
                ref={projectRef}
                className="container"
            >
                <IoMdCloseCircle onClick={close} />

                <h3>{project.name}</h3>

                <div className="img">
                    <img src={project.workImg} />
                </div>

                <p>{project.description}</p>

                <div className="tags">
                    {project.tags.map((tag) => (
                        <p> {tag}</p>
                    ))}
                </div>

                <h4>Features</h4>
                <ul>
                    {project.features.map((f) => (
                        <li>{f}</li>
                    ))}
                </ul>

                <a target="_blank" className="github" href={project.github}>
                    <FaGithub />
                </a>

                <a target="_blank" className="btn" href={project.link}>
                    View Project
                </a>
            </div>
        </div>
    );
}

export default Project;
