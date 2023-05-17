
const dislikeStorage = {
    dislikeState: false,
    storageDislike: [

    ]
}

const DISLIKE_STATE = "DISLIKE_STATE";
const DISLIKE_STORAGE = "DISLIKE_STORAGE";
const DISLIKE_DEL = "DISLIKE_DEL";

export const DislikeReducer = (state = dislikeStorage, action) => {
    switch (action.type) {

        case DISLIKE_STATE:
            return {
                ...state, dislikeState: action.payload
            }

        case DISLIKE_STORAGE: 
        if (state.storageDislike.find(item => item.id === action.payload.id)) {
            return {
                ...state, storageDislike: [...state.storageDislike]
            }
        }
        else {
            return {
                ...state, storageDislike: [...state.storageDislike, action.payload]
            }
        }

        case DISLIKE_DEL:
            return {
                ...state, storageDislike: [...state.storageDislike.filter((element) => element.id !== action.payload )]
            }

        default:
            return state
    }
}   

export const dislikeStateCreator = (payload) => {
    return { type: "DISLIKE_STATE", payload } 
}

export const dislikeStorageCreator = (payload) => {
    return { type: "DISLIKE_STORAGE", payload }
}   

export const dislikeStorageDelete = (payload) => {
    return { type: "DISLIKE_DEL", payload }
}