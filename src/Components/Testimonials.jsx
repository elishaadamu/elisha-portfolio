import React from "react";
import "./Styles/testimonials.scss";
import { FaQuoteRight } from "react-icons/fa";
import wang from "../assets/wang.jpg";
import Christopher from "../assets/christopherallen.jpeg";
import West from "../assets/rashad-west.png";

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="container">
                <h1>Testimonials</h1>
                <p>
                    Hear from those who have collaborated with me. Discover what
                    clients and colleagues say about my work, dedication, and
                    impact on their projects.
                </p>

                <div className="cards">
                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            Elisha's meticulous attention to detail and dedication
                            to user experience greatly enhanced our website's
                            design and functionality.
                        </p>
                        <div className="person">
                            <img src={Christopher} alt="person" />
                        </div>
                        <small>Christopher Allen</small>
                    </div>

                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            Elisha transformed our vision into a stunning,
                            responsive website with impressive animations,
                            showcasing his exceptional frontend skills.
                        </p>
                        <div className="person">
                            <img src={West} alt="person" />
                        </div>
                        <small>Rashad West</small>
                    </div>

                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            Elisha’s creative approach and technical expertise
                            ensured our project’s success, delivering
                            outstanding results beyond our expectations.
                        </p>
                        <div className="person">
                            <img src={wang} alt="person" />
                        </div>
                        <small>Ziliang Wang</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
