import React from "react";

import classes from './chessBoard.module.css';
import { useDispatch, useSelector } from "react-redux";

import ChessCell from "../chessCell/ChessCell";
import { useState } from "react";
import { getByDisplayValue } from "@testing-library/react";

import { clickFigureAction } from "../../store/chessReducer";
import { clickIdFigureAction } from "../../store/chessReducer";

const ChessBoard = () => {

    const cells = useSelector(state => state.chess.cells);

    const [cellState, setCellState] = useState(null);
    const [rookState, setRookState] = useState(null);

    const figureAction = useSelector(state => state.chess.figureRook.clickFigure);
    const figureId = useSelector(state => state.chess.figureRook.id);
    const figure = useSelector(state => state.chess.figureRook);
    const dispatch = useDispatch();

    // console.log(figureAction);

    function clickOnCell(elId) {
        // setRookState(false);
        setCellState(elId);
        dispatch(clickIdFigureAction(elId));
    }

    function clickOnFigure() {
        setRookState(true);
        dispatch(clickFigureAction(true));
    }

    // function mouseEnter() {
    //     console.log(rookState);
    //     setCellState(null);
    // }

    // console.log(rookState);
    // console.log(figureAction);

    return (
        <div className={classes.chessWrapper}>
            here is my little board
            <div className={classes.board} >
                {
                    cells.map(element =>
                        <ChessCell
                            // OnMouse={mouseEnter}
                            cellState={cellState === element.id ? cellState : ""} // figureState === element.id ? figureState : "" 
                            onClick={() => clickOnCell(element.id)}
                            onClickFigure={() => clickOnFigure()}
                            figureState={cellState === element.id ? rookState : ""}
                            newFigureId={figureId}

                            key={element.id}
                            id={element.id}
                            color={element.color}
                            coordinatey={element.coordinatey}
                            coordinatex={element.coordinatex}></ChessCell>
                    )
                }
            </div>
        </div>
    )
}

export default ChessBoard;
