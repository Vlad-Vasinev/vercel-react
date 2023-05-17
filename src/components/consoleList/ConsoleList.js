<<<<<<< HEAD:Desktop/React=))/cats/react-cats/cats/src/components/consoleList/ConsoleList.js
=======

>>>>>>> 0ae5fc78e77f79aed20a8d05febcfa1478914c3e:src/components/consoleList/ConsoleList.js
import React from "react";

import classes from './consoleList.module.css';

import ConsoleEl from "../consoleEl/ConsoleEl";

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const ConsoleList = () => {

    const sortedData = useSelector(state => state.sort.sortedData);
    const consoleState = useSelector(state => state.console.consoleState);

    const primaryColor = useSelector(state => state.theme.themeColorPrimary);

    return (
        <ul className={classes.consoleList} style={ {color: primaryColor} }>
            {
                consoleState !== "" ? 
                sortedData.map(el =>
                    <ConsoleEl
                    id = { el.id }
                    key = { uuidv4() }></ConsoleEl>
                )
                : "nothing was added"
            }
        </ul>
    )
}

export default ConsoleList;