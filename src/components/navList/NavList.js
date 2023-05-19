
import React from "react";
import { Link } from "react-router-dom";

import classes from './navList.module.css';

import navItemImg_1 from '../../assets/images/nav-item-img-1.png';
import navItemImg_2 from '../../assets/images/nav-item-img-2.png';
import navItemImg_3 from '../../assets/images/nav-item-img-3.png';
import { useSelector } from "react-redux";

const NavList = () => {

    const backgroundNav = useSelector(state => state.theme.themeBackgroundNav);

    return (
        <ul className={classes.navList} >
            <li className={classes.navItem}>
                <div className={classes.navItemImg}>
                    <img src={navItemImg_3} alt=""></img>
                </div>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/"> homePage </Link>
            </li>
            <li className={classes.navItem}>
                <div className={classes.navItemImg}>
                    <img src={navItemImg_1} alt=""></img>
                </div>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/Voting" > voting </Link>
            </li>
            <li className={classes.navItem}>
                <div className={classes.navItemImg}>
                    <img src={navItemImg_2} alt=""></img>
                </div>
                <Link className={classes.navItemLink} style={{ background: backgroundNav }} to="/Breeds"> breeds </Link>
            </li>
            {/* <li className={classes.navItem}>
                <div className={classes.navItemImg}>
                    <img src={navItemImg_3} alt=""></img>
                </div>
                <Link className={classes.navItemLink} style={ { background: backgroundNav } } to="/ChessBoard"> Chess </Link>
            </li> */}
        </ul>
    )
}

export default NavList;