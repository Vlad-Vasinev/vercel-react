
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";
import { SortReducer } from './sortReducer';
import { LikesReducer } from './likesReducer';
import { FavouriteReducer } from './favouriteReducer';
import { DislikeReducer } from './dislikeReducer';
import { ConsoleReducer } from './consoleReducer';
import { BreedsReducer } from './breedsReducer';
import { ThemeReducer } from './themeReducer';
import { LoadReducer } from './loadReducer';
import { ChessReducer } from './chessReducer';

const mixReducer = combineReducers({
    data: DataReducer,
    sort: SortReducer,
    likes: LikesReducer,
    favour: FavouriteReducer,
    dislike: DislikeReducer,
    console: ConsoleReducer,
    breeds: BreedsReducer,
    theme: ThemeReducer,
    load: LoadReducer,
    chess: ChessReducer,
});

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(mixReducer, composedEnhancer);