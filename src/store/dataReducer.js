
<<<<<<< HEAD:Desktop/React=))/cats/react-cats/cats/src/store/dataReducer.js

=======
>>>>>>> 0ae5fc78e77f79aed20a8d05febcfa1478914c3e:src/store/dataReducer.js
const data = {
    apiData: [

    ],
    apiDataNew: [

    ]
}

const GET_DATA = "GET_DATA";
const NEW_DATA = "NEW_DATA";

export const DataReducer = (state = data, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state, apiData: action.payload
            }
        case NEW_DATA:
            // console.log(action.payload);
            return {
                ...state, apiDataNew: [...state.apiDataNew, action.payload]
            }

        default:
            return state
    }
}

export const apiDataCreator = (payload) => {
    return { type: "GET_DATA", payload }
}

export const newApiDataCreator = (payload) => {
    return { type: "NEW_DATA", payload }
}
