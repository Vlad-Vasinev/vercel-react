
import React from "react";

import classes from './votingBlock.module.css';

import NavLink from "../navLink/NavLink";
import ReactionBlock from "../reactionBlock/ReactionBlock";
import ConsoleList from "../consoleList/ConsoleList";

const VotingBlock = () => {
    return (
        <div className= { classes.blockInner }>
            <NavLink></NavLink>
            <ReactionBlock></ReactionBlock>
            <ConsoleList></ConsoleList>
        </div>
    )
}

export default VotingBlock;