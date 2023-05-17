import React from "react";

import classes from './apiBlock.module.css';

const ApiBlock = () => {
    return (
        <div className={classes.apiInner}>
            <h2 className={classes.apiTitle}> Lets start using The Rick and Morty API </h2>
        </div>
    )
};

export default ApiBlock;