import { useSelector } from "react-redux";

const dataSort = {
    sortedData: [

    ],
    stateChange: false,
}

const SORT_DATA = "SORT_DATA";
const START_CHAHGE = "START_CHAHGE";

export const SortReducer = (state = dataSort, action ) => {
    switch(action.type) {
        case SORT_DATA:
            return {
                ...state, sortedData:  action.payload
        }
        case START_CHAHGE:
            return {
                ...state, stateChange: action.payload
            }
        default:
            return state
    }
}

export const apiDataSort = (payload) => {
    return { type: "SORT_DATA", payload }
}

export const apiDataStart = (payload) => {
    return {type: "START_CHAHGE", payload }
}