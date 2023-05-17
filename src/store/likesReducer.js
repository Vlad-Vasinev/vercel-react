import { act } from "react-dom/test-utils";

const likesStorage = {
    likesState: false,
    storageLikes: [

    ]
}

const LIKES_STATE = "LIKES_STATE";
const LIKES_STORAGE = "LIKES_STORAGE";
const DEL_LIKES = "DEL_LIKES";

export const LikesReducer = (state = likesStorage, action) => {
    switch (action.type) {
        case LIKES_STATE:
            return {
                ...state, likesState: action.payload,
            }
        case LIKES_STORAGE:
            if (state.storageLikes.find(item => item.id === action.payload.id)) {
                return {
                    ...state, storageLikes: [...state.storageLikes]
                }
            }
            else {
                return {
                    ...state, storageLikes: [...state.storageLikes, action.payload]
                }
            }

            case DEL_LIKES:
                return {
                    ...state, storageLikes: [...state.storageLikes.filter((element) => element.id !== action.payload )]
                }

        default:
            return state
    }
}

export const likesStateCreator = (payload) => {
    return { type: "LIKES_STATE", payload }
}

export const likesStorageCreator = (payload) => {
    return { type: "LIKES_STORAGE", payload }
}

export const likesStorageDelete = (payload) => {
    return { type: "DEL_LIKES", payload }
}