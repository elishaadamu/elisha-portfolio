import React, { useRef, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { FaMale } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import "./Styles/contact.scss";
import Me from "../assets/contact.png";
import Loader from "./Loader";
import Msg from "./Msg";

// Validation schema using Yup
const schema = yup.object().shape({
    user_name: yup.string().required("Name is required"),
    user_email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    message: yup.string().required("Message is required"),
});

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const [successful, setSuccessful] = useState(false);

    // Set up form handling with react-hook-form and Yup
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const sendEmail = (data) => {
        setLoading(true);
        setIsErr(false);
        setSuccessful(false);

        emailjs
            .sendForm(
                "service_a0rp1r4",
                "template_uvm7pn7",
                form.current,
                "16pJR90itYXSFjqHa"
            )
            .then(
                (result) => {
                    setLoading(false);
                    setIsErr(false);
                    setSuccessful(true);
                    reset();
                },
                (error) => {
                    setLoading(false);
                    setSuccessful(false);
                    setIsErr(true);
                    console.log("Failed to send email.", error.text);
                }
            );
    };

    return (
        <>
            <div className="contact" id="contact">
                <div className="container">
                    <h1>Connect With Me</h1>

                    <div className="socials">
                        <a
                            href="https://github.com/elishaadamu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span>Github</span>
                        </a>

                        <a href="tel:+2347067206984">
                            <FaPhone />
                            <span>+2347067206984</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/elisha-adamu-505552134/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsLinkedin />
                            <span>Linkedin</span>
                        </a>

                        <a
                            href="https://x.com/elisha_inuwa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaSquareXTwitter />
                            <span>X</span>
                        </a>
                    </div>

                    <div className="fun">
                        <h3>Start a project</h3>
                        <p>
                            Interested in working together? We should queue up a
                            time to chat,
                            <br /> I'll buy the coffee🤭️🤫️.
                        </p>
                        <label className="fun-btn" htmlFor="name">
                            🤘Lets do this
                        </label>
                    </div>

                    <div className="mail">
                        <div className="picture">
                            <div>
                                <img src={Me} alt="me" />
                            </div>
                        </div>

                        <div className="mail-me">
                            <h2>Hit my mail</h2>
                            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                                <div className="name">
                                    <label>Enter your name</label>
                                    <p className="err">
                                        {errors.user_name?.message}
                                    </p>
                                    <div>
                                        <FaMale />
                                        <input
                                            placeholder="Enter name"
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            {...register("user_name")}
                                        />
                                    </div>
                                </div>

                                <div className="email">
                                    <label>Enter your Email address</label>
                                    <p className="err">
                                        {errors.user_email?.message}
                                    </p>
                                    <div>
                                        <MdOutlineMail />
                                        <input
                                            placeholder="Enter email address"
                                            type="email"
                                            name="user_email"
                                            {...register("user_email")}
                                        />
                                    </div>
                                </div>

                                <div className="message">
                                    <label>Type your message</label>
                                    <p className="err">
                                        {errors.message?.message}
                                    </p>
                                    <textarea
                                        name="message"
                                        placeholder="Message here"
                                        {...register("message")}
                                    ></textarea>
                                </div>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? <Loader /> : null}

            {isErr ? (
                <Msg
                    msg="Could not send message, please check your connection"
                    failed={true}
                />
            ) : null}

            {successful ? <Msg msg="Successfully sent" failed={false} /> : null}
        </>
    );
}

export default Contact;
