import React from "react";
import classes from './chooseMap.module.css';

const ChooseMap = (props) => {

    function mapChange (e) {
        props.stateMap(e.target.value);
    }

    return (
        <div className={ classes.chooseMapWrapper }>
            <select onChange={mapChange}>
                <option value="main"> MAIN MAP</option>
                <option value="alidade">ALIDADE MAP</option>
                <option value="osm">OSM MAP</option>
                <option value="outdoor">OUTDOOR MAP</option>
            </select>
        </div>
    )
}

export default ChooseMap;