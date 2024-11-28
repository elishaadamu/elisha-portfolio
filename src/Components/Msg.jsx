import React, { useEffect, useRef } from "react";
import "./Styles/msg.scss";
import { GiCheckMark } from "react-icons/gi";
import gsap from "gsap";
import { TfiFaceSad } from "react-icons/tfi";

function Msg({ msg, failed }) {
    const msgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            msgRef.current,
            { y: "-100%", opacity: 0 },
            { y: "10%", opacity: 1, duration: 1 }
        );

        const timeOut = setTimeout(() => {
            gsap.to(msgRef.current, { y: "-100%", opacity: 0 });
        }, 5000);

        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div className={`submit-success ${failed ? "err" : ""}`} ref={msgRef}>
            {failed ? <TfiFaceSad /> : <GiCheckMark />}
            <p>{msg}</p>
        </div>
    );
}

export default Msg;
