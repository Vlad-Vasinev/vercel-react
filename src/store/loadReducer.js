<<<<<<< HEAD:Desktop/React=))/cats/react-cats/cats/src/store/loadReducer.js
=======

>>>>>>> 0ae5fc78e77f79aed20a8d05febcfa1478914c3e:src/store/loadReducer.js
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