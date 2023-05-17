import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from './customLoad.module.css';


import { v4 as uuidv4 } from 'uuid';
import { loadItemCreator } from "../../store/loadReducer";
import { newApiDataCreator } from "../../store/dataReducer";

const CustomLoad = (props) => {

    const [colorBorder, setColorBorder] = useState(false);

    const dispatch = useDispatch();
    const loadItems = useSelector(state => state.load.loadItems);

    function dragEnterFunc(e) {
        e.preventDefault();
        e.stopPropagation();
        setColorBorder(true);
    }

    function dragLeaveFunc(e) {
        e.preventDefault();
        e.stopPropagation();
        setColorBorder(false);
    }

    function dragOverFunc(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('dragging is here');
    }

    function dragDropFunc(e) {
        e.preventDefault();
        e.stopPropagation();

        let dt = e.dataTransfer;
        let files = dt.files;

        for (let i = 0; i <= files.length; i++) {

            const fileUrl = new FileReader();
            fileUrl.readAsDataURL(files[i]);

            let webResult = prompt("Введите пожалуйста имя персонажа");

            if (webResult !== null) {
                fileUrl.onload = () => {
                    let newArr = { name: webResult, id: uuidv4(), image: fileUrl.result };
                    dispatch(newApiDataCreator(newArr));
                    dispatch(loadItemCreator(fileUrl.result));
                }
            }
            else {

            }
        }

    }

    function loadClickFunc(e) {
        for (let i = 0; i <= e.target.files.length; i++) {
            
            let urlImg = URL.createObjectURL(e.target.files[i]);
            let webResult = prompt("Введите пожалуйста имя персонажа");
            let newArr = { name: webResult, id: uuidv4(), image: urlImg };
            dispatch(newApiDataCreator(newArr));
        }
    }

    function closePopup() {
        props.close(false);
    }

    return (
        <div className={classes.loadWrapper}>
            <button
                onClick={closePopup}
                className={classes.delItem}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z" fill="white" />
                </svg>
            </button>
            <h2 className={classes.loadTitle}>
                Upload a .jpg or .png Rick and Morty Image
                <span className={classes.loadSubTitle}>Any uploads must comply with the upload guidelines or face deletion.</span>
            </h2>
            <div
                onDragOver={dragOverFunc}
                onDrop={dragDropFunc}
                onDragLeave={dragLeaveFunc}
                onDragEnter={dragEnterFunc}
                className={classes.loadDragArea} style={{ border: colorBorder ? "2px dashed #7A00FC" : "2px dashed #FBE0DC" }}>
                <div className={classes.loadDragInner}>
                    <span> Drag </span> here your file or
                    <label className={classes.loadImagesLabel}>
                        Click here
                        <input
                            onChange={loadClickFunc}
                            placeholder="click here to load image only!"
                            accept=".png, .jpg,"
                            className={classes.loadImagesInput}
                            multiple type="file" name="file[]" />
                    </label>
                    to upload
                </div>
            </div>
            {
                loadItems.map(el =>
                    <div
                        key={uuidv4()}
                        className={classes.loadImg}>
                        <img src={el}></img>
                    </div>
                )
            }
            <div className={classes.loadInfo}> No file selected </div>
        </div>
    )
}

export default CustomLoad;