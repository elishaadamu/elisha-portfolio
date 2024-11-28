import React, { useState } from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import "./Styles/navbar.scss";
import { Link } from "react-scroll";

function Navbar() {
    const [viewMenu, setViewMenu] = useState(false);

    return (
        <div className={`navbar ${viewMenu ? "view-menu" : ""}`}>
            <nav onClick={() => (viewMenu ? setViewMenu(false) : null)}>
                <div className="left">
                    <Link
                        className="desktop-name"
                        to="hero"
                        offset={-80}
                        smooth={true}
                        duration={500}
                    >
                        Elisha<span>Adamu.</span>
                    </Link>

                    <Link
                        className="mobile-name"
                        to="hero"
                        offset={-80}
                        smooth={true}
                        duration={500}
                    >
                        E<span>A.</span>
                    </Link>

                    <div className="svg">
                        <CgMenuHotdog onClick={() => setViewMenu(true)} />
                        <IoMdCloseCircle onClick={() => setViewMenu(false)} />
                    </div>
                </div>

                <ul>
                    <li>
                        <Link
                            onClick={() => setViewMenu(false)}
                            to="hero"
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            onClick={() => setViewMenu(false)}
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            about
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            onClick={() => setViewMenu(false)}
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="portfolio"
                            onClick={() => setViewMenu(false)}
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="testimonials"
                            onClick={() => setViewMenu(false)}
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            onClick={() => setViewMenu(false)}
                            offset={-80}
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
