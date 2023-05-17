<<<<<<< HEAD:Desktop/React=))/cats/react-cats/cats/src/components/favouritePage/FavouritePage.js
=======

>>>>>>> 0ae5fc78e77f79aed20a8d05febcfa1478914c3e:src/components/favouritePage/FavouritePage.js
import React from "react";

import classes from './favouritePage.module.css';

import NavList from "../navList/NavList";
import SearchBar from "../searchBar/SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { favourStorageDelete } from "../../store/favouriteReducer";

import { themeDarkCreator } from "../../store/themeReducer";
import { themeLightCreator } from "../../store/themeReducer";

const FavouritePage = () => {

    const dispatch = useDispatch();

    const stateFavour = useSelector(state => state.favour.favouriteState);
    const favourLikes = useSelector(state => state.favour.favouriteLikes);

    const themeAct = useSelector(state => state.theme.themeActive);

    const primaryColor = useSelector(state => state.theme.themeColorPrimary);
    const secondaryColor = useSelector(state => state.theme.themeColorSecondary);

    const bgDark = useSelector(state => state.theme.customBg);

    if (themeAct === true) {
        dispatch(themeDarkCreator());
    }
    else {
        dispatch(themeLightCreator());
    }

    function delItemFunc(elId) {
        dispatch(favourStorageDelete(elId));
    }

    return (
        <div className={classes.reactionInner}>
            <div className="decoration decoration_1"></div>
            <div className="decoration decoration_2"></div>
            <div className={classes.reactionPrimary}>
                <h1 className="primaryTitle" style={{ color: primaryColor }}>
                    Hi guest!
                    <span className="primarySubtitle" style={{ color: secondaryColor }}> Welcome to my 2023 Front-end page </span>
                </h1>
                <h2 className="secondaryTitle" style={{ color: primaryColor }}>
                    Lets start using The Rick and Morty API
                </h2>
                <NavList></NavList>
            </div>
            <div className={classes.reactionSecondary}>
                <div className={classes.favouriteBlock}>
                    <SearchBar></SearchBar>
                    <div className={classes.blockFavourite} style={{ backgroundColor: bgDark }}>
                        {
                            stateFavour ?
                                favourLikes.map(el =>
                                    <div
                                        className={classes.likesItem}
                                        key={uuidv4()}>
                                        <button
                                            onClick={() => delItemFunc(el.id)}
                                            className={classes.delItem}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z" fill="white" />
                                            </svg>
                                        </button>
                                        <img src={el.image} alt={el.name}></img>
                                        <div style={{ color: primaryColor }}> {el.name} </div>
                                    </div>
                                )
                                :
                                <div style={{ color: primaryColor }}> you have nothing in favour section </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouritePage;