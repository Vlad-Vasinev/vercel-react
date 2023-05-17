<<<<<<< HEAD:Desktop/React=))/cats/react-cats/cats/src/store/chessReducer.js
=======

>>>>>>> 0ae5fc78e77f79aed20a8d05febcfa1478914c3e:src/store/chessReducer.js
const chess = {
    cells: [
        { id: "a1", coordinatex: 0, coordinatey: 0, color: "#7CC991", }, // 7CC991 - light green
        { id: "b1", coordinatex: 1, coordinatey: 0, color: "#E5EAE6", },// E5EAE6 light white
        { id: "c1", coordinatex: 2, coordinatey: 0, color: "#7CC991", },
        { id: "d1", coordinatex: 3, coordinatey: 0, color: "#E5EAE6", },
        { id: "e1", coordinatex: 4, coordinatey: 0, color: "#7CC991", },
        { id: "f1", coordinatex: 5, coordinatey: 0, color: "#E5EAE6", },
        { id: "g1", coordinatex: 6, coordinatey: 0, color: "#7CC991", },
        { id: "h1", coordinatex: 7, coordinatey: 0, color: "#E5EAE6", },
        { id: "a2", coordinatex: 0, coordinatey: 1, color: "#E5EAE6", },
        { id: "b2", coordinatex: 1, coordinatey: 1, color: "#7CC991", },
        { id: "c2", coordinatex: 2, coordinatey: 1, color: "#E5EAE6", },
        { id: "d2", coordinatex: 3, coordinatey: 1, color: "#7CC991", },
        { id: "e2", coordinatex: 4, coordinatey: 1, color: "#E5EAE6", },
        { id: "f2", coordinatex: 5, coordinatey: 1, color: "#7CC991", },
        { id: "g2", coordinatex: 6, coordinatey: 1, color: "#E5EAE6", },
        { id: "h2", coordinatex: 7, coordinatey: 1, color: "#7CC991", },
        { id: "a3", coordinatex: 0, coordinatey: 2, color: "#7CC991", },
        { id: "b3", coordinatex: 1, coordinatey: 2, color: "#E5EAE6", },
        { id: "c3", coordinatex: 2, coordinatey: 2, color: "#7CC991", },
        { id: "d3", coordinatex: 3, coordinatey: 2, color: "#E5EAE6", },
        { id: "e3", coordinatex: 4, coordinatey: 2, color: "#7CC991", },
        { id: "f3", coordinatex: 5, coordinatey: 2, color: "#E5EAE6", },
        { id: "g3", coordinatex: 6, coordinatey: 2, color: "#7CC991", },
        { id: "h3", coordinatex: 7, coordinatey: 2, color: "#E5EAE6", },
        { id: "a4", coordinatex: 0, coordinatey: 3, color: "#E5EAE6", },
        { id: "b4", coordinatex: 1, coordinatey: 3, color: "#7CC991", },
        { id: "c4", coordinatex: 2, coordinatey: 3, color: "#E5EAE6", },
        { id: "d4", coordinatex: 3, coordinatey: 3, color: "#7CC991", },
        { id: "e4", coordinatex: 4, coordinatey: 3, color: "#E5EAE6", },
        { id: "f4", coordinatex: 5, coordinatey: 3, color: "#7CC991", },
        { id: "g4", coordinatex: 6, coordinatey: 3, color: "#E5EAE6", },
        { id: "h4", coordinatex: 7, coordinatey: 3, color: "#7CC991", },
        { id: "a5", coordinatex: 0, coordinatey: 4, color: "#7CC991", },
        { id: "b5", coordinatex: 1, coordinatey: 4, color: "#E5EAE6", },
        { id: "c5", coordinatex: 2, coordinatey: 4, color: "#7CC991", },
        { id: "d5", coordinatex: 3, coordinatey: 4, color: "#E5EAE6", },
        { id: "e5", coordinatex: 4, coordinatey: 4, color: "#7CC991", },
        { id: "f5", coordinatex: 5, coordinatey: 4, color: "#E5EAE6", },
        { id: "g5", coordinatex: 6, coordinatey: 4, color: "#7CC991", },
        { id: "h5", coordinatex: 7, coordinatey: 4, color: "#E5EAE6", },
        { id: "a6", coordinatex: 0, coordinatey: 5, color: "#E5EAE6", },
        { id: "b6", coordinatex: 1, coordinatey: 5, color: "#7CC991", },
        { id: "c6", coordinatex: 2, coordinatey: 5, color: "#E5EAE6", },
        { id: "d6", coordinatex: 3, coordinatey: 5, color: "#7CC991", },
        { id: "e6", coordinatex: 4, coordinatey: 5, color: "#E5EAE6", },
        { id: "f6", coordinatex: 5, coordinatey: 5, color: "#7CC991", },
        { id: "g6", coordinatex: 6, coordinatey: 5, color: "#E5EAE6", },
        { id: "h6", coordinatex: 7, coordinatey: 5, color: "#7CC991", },
        { id: "a7", coordinatex: 0, coordinatey: 6, color: "#7CC991", },
        { id: "b7", coordinatex: 1, coordinatey: 6, color: "#E5EAE6", },
        { id: "c7", coordinatex: 2, coordinatey: 6, color: "#7CC991", },
        { id: "d7", coordinatex: 3, coordinatey: 6, color: "#E5EAE6", },
        { id: "e7", coordinatex: 4, coordinatey: 6, color: "#7CC991", },
        { id: "f7", coordinatex: 5, coordinatey: 6, color: "#E5EAE6", },
        { id: "g7", coordinatex: 6, coordinatey: 6, color: "#7CC991", },
        { id: "h7", coordinatex: 7, coordinatey: 6, color: "#E5EAE6", },
        { id: "a8", coordinatex: 0, coordinatey: 7, color: "#E5EAE6", },
        { id: "b8", coordinatex: 1, coordinatey: 7, color: "#7CC991", },
        { id: "c8", coordinatex: 2, coordinatey: 7, color: "#E5EAE6", },
        { id: "d8", coordinatex: 3, coordinatey: 7, color: "#7CC991", },
        { id: "e8", coordinatex: 4, coordinatey: 7, color: "#E5EAE6", },
        { id: "f8", coordinatex: 5, coordinatey: 7, color: "#7CC991", },
        { id: "g8", coordinatex: 6, coordinatey: 7, color: "#E5EAE6", },
        { id: "h8", coordinatex: 7, coordinatey: 7, color: "#7CC991", },
    ],
    figures: [  // 293949 - light black // fbbd4e light yellow
        {},
    ],
    figureRook: {clickFigure: false, id: "a1", name: "whiteRook", coordinatex: 0, coordinatey: 0, color: "#fbbd4e"}
}

const CLICK_ON_FIGURE = "CLICK_ON_FIGURE";
const SET_FIGURE_ID = "SET_FIGURE_ID";

export const ChessReducer = (state = chess, action) => {
    switch (action.type) {

        case CLICK_ON_FIGURE:
            return {
                ...state, figureRook: {clickFigure: action.payload, id: "a1", name: "whiteRook", coordinatex: 0, coordinatey: 0, color: "#fbbd4e"}
            }

        case SET_FIGURE_ID: 
        return {
            ...state, figureRook: {clickFigure: true, id: action.payload, name: "whiteRook", coordinatex: 0, coordinatey: 0, color: "#fbbd4e"}
        }

        default:
            return state

    }
}

export const clickFigureAction = (payload) => {
    return { type: "CLICK_ON_FIGURE", payload }
}

export const clickIdFigureAction = (payload) => {
    return { type: "SET_FIGURE_ID", payload }
}