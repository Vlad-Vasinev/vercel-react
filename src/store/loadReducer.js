
const loadState = {
    loadItems: [],
}

const CUSTOM_CHARACTER = "CUSTOM_CHARACTER";

export const LoadReducer = (state = loadState, action) => {
    switch (action.type) {

        case CUSTOM_CHARACTER:
            console.log(action.payload);
            return {
                ...state, loadItems: [...state.loadItems, action.payload]
            }

        default:
            return state
    }
}

export const loadItemCreator = (payload) => {
    return { type: "CUSTOM_CHARACTER", payload }
}