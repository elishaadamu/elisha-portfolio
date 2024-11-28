import React from "react";
import { ClipLoader } from "react-spinners";
import "./Styles/loader.scss";

const Loader = () => {
    return (
        <div className="loader">
            <div className="wrapper">
                <ClipLoader
                    color="var(--primary-color)"
                    loading={true}
                    size={50}
                />
            </div>
        </div>
    );
};

export default Loader;
