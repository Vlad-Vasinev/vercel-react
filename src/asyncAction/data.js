

import { apiDataCreator } from "../store/dataReducer";
import { newApiDataCreator } from "../store/dataReducer";

export const getData = () => {
    return function (dispatch) {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => {
                dispatch(apiDataCreator(data.results));
            });
    }
}

export const getNewData = () => {
    return function (dispatch) {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => {
                data.results.map(element => {
                    dispatch(newApiDataCreator(element));
                });
            });
    }
}