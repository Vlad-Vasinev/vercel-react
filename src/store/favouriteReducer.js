import { act } from "react-dom/test-utils"

const favourState = {
    favouriteState: false,
    favouriteLikes: [

    ]
}

const FAVOUR_STATE = "FAVOUR_STATE";
const FAVOUR_LIKES = "FAVOUR_LIKES";
const DEL_FAVOUR = "DEL_FAVOUR";

export const FavouriteReducer = (state = favourState, action) => {
    switch (action.type) {

        case FAVOUR_STATE:
            return {
                ...state, favouriteState: action.payload
            }

        case FAVOUR_LIKES:
            if (state.favouriteLikes.find(item => item.id === action.payload.id)) {
                return {
                    ...state, favouriteLikes: [...state.favouriteLikes]
                }
            }
            else {
                return {
                    ...state, favouriteLikes: [...state.favouriteLikes, action.payload]
                }
            }


            case DEL_FAVOUR: 
                return {
                    ...state, favouriteLikes: [...state.favouriteLikes.filter((element) => element.id !== action.payload )]
                }

        default:
            return state
    }
}

export const favourStateCreator = (payload) => {
    return { type: "FAVOUR_STATE", payload }
}

export const favourStorageCreator = (payload) => {
    return { type: "FAVOUR_LIKES", payload }
}

export const favourStorageDelete = (payload) => {
    return { type: "DEL_FAVOUR", payload }
}