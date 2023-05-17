
<<<<<<< HEAD:Desktop/React=))/cats/react-cats/cats/src/store/consoleReducer.js
=======

>>>>>>> 0ae5fc78e77f79aed20a8d05febcfa1478914c3e:src/store/consoleReducer.js
const stateConsole = {
    consoleState: "",
}

export const CONSOLE_STATE = "CONSOLE_STATE";

export const ConsoleReducer = (state = stateConsole, action) => {
    switch(action.type) { 
        case CONSOLE_STATE: 
            return {
                ...state, consoleState: action.payload
            }

        default:
            return state
    }
}

export const consoleStateCreator = (payload) => {
    return { type: "CONSOLE_STATE", payload }
}