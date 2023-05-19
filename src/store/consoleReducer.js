

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