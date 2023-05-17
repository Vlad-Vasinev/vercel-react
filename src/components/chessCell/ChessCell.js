import React, { useState } from "react";

import classes from './chessCell.module.css'

import WhiteRook from "../figures/whiteRook/WhiteRook";
import { useDispatch, useSelector } from "react-redux";

const ChessCell = (props) => {

    // const figureAction = useSelector(state => state.chess.figureRook.clickFigure);
    // console.log(props.cellState);
    // console.log(props.newFigureId);
    // console.log(props.figureState);
    // console.log(figureAction);

    return (
        <div
            onMouseOver={ props.OnMouse }
            onMouseEnter={props.OnMouse}
            onClick = { props.onClick } //Click
            className={classes.cell}
            coordinatex={props.coordinatex}
            coordinatey={props.coordinatey}
            id={props.id}
            style={{ backgroundColor: props.color }}>
            {
                props.id === "a8"? <WhiteRook onFigureClick = { () => props.onClickFigure() }></WhiteRook> : "" 
            }
            {
                props.cellState && props.figureState === true && props.newFigureId === props.id ? <WhiteRook onFigureClick = { () => props.onClickFigure() }></WhiteRook> : "" //&& props.figureState === true  figureAction === true
            }
        </div>
    )
}

export default ChessCell;