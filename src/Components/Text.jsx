import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Text = () => {
    const [text] = useTypewriter({
        words: ["software engineer", "frontend designer", "web developer"],
        loop: -1,
        typeSpeed: 250,
        delaySpeed: 250,
    });

    return (
        <div className="type-writer">
            <h2>{text}</h2>
            <Cursor cursorStyle="\" cursorColor="var(--primary-color)" />
        </div>
    );
};
export default Text;
