const breeds = {
    counter: 1,
}

const SET_COUNTER = "SET_COUNTER";

export const BreedsReducer = (state = breeds, action) => {
    switch(action.type) {
        case SET_COUNTER:
            return {
                ...state, counter: state.counter + action.payload
            }
        default:
            return state
    }
}

export const counterCreator = (payload) => {
    return { type: "SET_COUNTER", payload}
} 