import React, { useState } from "react";

import classes from './whiteRook.module.css';
import whiteRook from './rook-white.png';
import { useDeferredValue } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { clickFigureAction } from "../../../store/chessReducer";

const WhiteRook = (props) => {

    // const figureAction = useSelector(state => state.chess.figureRook.clickFigure);

    const [click, setClick] = useState(false);

    function clickOnFigure (e) {
        // e.preventDefault();
        // e.stopPropagation();
        setClick(true);
        props.onFigureClick();
    }

    return (
        <div
        onClick={clickOnFigure}
        id="a8"
        style = { click ? {  border: "1px solid red" } : {  border: "1px solid transparent" } }
        className = { classes.whiteRook }>
            <img src={whiteRook} alt="white figure rook"></img>
        </div>
    )
}

export default WhiteRook;