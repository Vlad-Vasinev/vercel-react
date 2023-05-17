import React from "react";

import classes from './consoleEl.module.css';

import { useSelector } from "react-redux";

const ConsoleEl = (props) => {

    const consoleState = useSelector(state => state.console.consoleState);

    console.log(props.id);

    let data = new Date();
    let currentData = data.getHours() + ":" + data.getMinutes();
    console.log(data.getHours() + ":" + data.getMinutes());

    return (
        <li className={classes.consoleListEl}>
            <div className={classes.consoleListTime}>
                {currentData}
            </div>
            <div className={classes.consoleListId}>
                Image Id: <span> {props.id} </span> was added to  {consoleState}
            </div>
            <div className={classes.consoleListIcon}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E" />
                </svg>
            </div>
        </li>
    )
}

export default ConsoleEl;