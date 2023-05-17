import React from "react";

import classNamees from './progressBar.module.css';

const ProgressBar = () => {

    // const animate = {
    //     animationName: "big",
    //     animationTimingFunction: "easeInOut",
    //     animationDuration: "1.5s",
    //     strokeWidth: "10px",
    // } 

    return (
        <div className={classNamees.frame}>
            <div className={classNamees.circleBig}>
                <svg>
                    <circle className={classNamees.progress} cx="25" cy="25" r="20"></circle>
                </svg>
            </div>
        </div>
    )
}

export default ProgressBar;

//style={animate}