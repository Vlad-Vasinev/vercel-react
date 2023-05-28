import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from './breedsPage.module.css';

import { v4 as uuidv4 } from 'uuid';
import { newApiDataCreator } from "../../store/dataReducer";
import { counterCreator } from "../../store/breedsReducer";

import { themeDarkCreator } from "../../store/themeReducer";
import { themeLightCreator } from "../../store/themeReducer";

import CustomLoad from "../customLoad/CustomLoad";
import LeafletMap from "../leaflet/Leaflet";

import ReactMapGl,
{
    Layer, ScaleControl,
    NavigationControl, GeolocateControl,
    FullscreenControl, Marker, Popup, MarkerDragEvent
} from "react-map-gl";
import { LngLat } from 'react-map-gl';
import markerIcon from '../../assets/images/marker-icon.png';

import YorkFirstImg from '../../assets/images/york1.PNG';
import YorkSecondImg from '../../assets/images/york2.PNG';

// for production
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const Breeds = () => {

    const counterState = useSelector(state => state.breeds.counter);
    const newApiData = useSelector(state => state.data.apiDataNew);
    const primaryColor = useSelector(state => state.theme.themeColorPrimary);
    const themeAct = useSelector(state => state.theme.themeActive);

    const dispatch = useDispatch();

    const [character, setCharacter] = useState(false);


    const refButtonLoad = React.useRef();
    const [customCharacter, setCustomCharacter] = useState("-40%");

    if (themeAct === true) {
        dispatch(themeDarkCreator());
    }
    else {
        dispatch(themeLightCreator());
    }

    function useLoadData() {

        dispatch(counterCreator(1));
        fetch(`https://rickandmortyapi.com/api/character/?page=${counterState}`)
            .then(res => res.json())
            .then(data => {
                data.results.forEach(element => {
                    dispatch(newApiDataCreator(element));
                });
            })
    }

    function loadCustomCharacter(e) {
        document.querySelector('body').style.overflow = "hidden";
        setCharacter(true);

        if (window.innerWidth <= "992") {
            setCustomCharacter("-20%");
        }

        else {
            setCustomCharacter("-40%");
        }

        e.target.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    function closeItemPopup(stateCharacter) {
        if (stateCharacter === false) {
            setCharacter(stateCharacter);
            document.querySelector('body').style.overflow = "initial";
        }
    }

    const parkLayer = {
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
            ],
            'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
        }
    }

    const [firstMarker, setFirstMarker] = useState({
        longitude: -74.06342915344241,
        latitude: 40.794616940239536,
    });

    const [secondMarker, setSecondMarker] = useState({
        longitude: -73.97399357604988,
        latitude: 40.78954841007655,
    });

    // const [popupOpen, setPopupOpen] = useState(false);

    const [showPopupFirst, setShowPopupFirst] = React.useState(true);
    const [showPopupSecond, setShowPopupSecond] = React.useState(true);

    const onFirstMarkerDrag = useCallback((event) => {

        setFirstMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);

    const onSecondMarkerDrag = useCallback((event) => {

        setSecondMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);

    return (
        <div
            className={classes.breedsPageWrapper}
            style={{ color: primaryColor }}>
            breeds page! You can see all characters here!
            <div className="decoration decoration_1"></div>
            <div className="decoration decoration_2"></div>
            <div className={classes.breedsList}>
                {
                    newApiData.map(elData =>
                        <div
                            className={classes.breedsItem}
                            key={uuidv4()}>
                            <div>
                                <img src={elData.image} />
                            </div>
                            <div style={{ color: primaryColor }}> {elData.name} </div>
                        </div>
                    )
                }
            </div>

            <div className={classes.loadBtnWrapper}>
                <button
                    onClick={useLoadData}
                    className={classes.loadMore} > load more </button>
                <button
                    ref={refButtonLoad}
                    onClick={loadCustomCharacter}
                    className={classes.loadCustom} > load your own character </button>
                {
                    character ?
                        <div className={classes.breedsLoadArea} style={{ top: customCharacter }}>
                            <CustomLoad close={closeItemPopup}></CustomLoad>
                        </div>
                        : ''
                }
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
            <div >
                <h2 style={{ marginBottom: "20px", marginTop: "20px" }} className="">Leaflet map</h2>
                <LeafletMap></LeafletMap>
            </div>
            <div style={{ marginTop: "100px" }}>
                <h2 style={{ marginBottom: "20px", marginTop: "20px" }} className="">MapBox map</h2>
                <ReactMapGl
                    initialViewState={{
                        longitude: -74.0630, //-75.6903 -74.0630  -74.0430
                        latitude: 40.7811, //45.4211    40.7811   40.7611
                        zoom: 12,
                        scrollZoom: false,
                    }}
                    scrollZoom="disable"
                    mapboxAccessToken="pk.eyJ1IjoidmxhZHZhc2luZXYiLCJhIjoiY2xpMzd2MnlhMmV4ajNkbnQ2YjlzY2wxZyJ9.vmimI0yPvHzI48xMTztqJg" //pk.eyJ1IjoidmxhZHZhc2luZXYiLCJhIjoiY2xpMzhvaWMxMGRnZTNlbXZqbDA0aGI0eSJ9.2PHt8q4XjKlD8Es3tt0-_g
                    style={{ width: "100%", height: 500 }}
                    mapStyle="mapbox://styles/mapbox/navigation-night-v1"
                >
                    <Layer {...parkLayer} />
                    <ScaleControl />
                    <NavigationControl position="top-left" />
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <Marker draggable
                    onClick={() => setShowPopupFirst(true)}
                    onDrag={onFirstMarkerDrag}
                    longitude={firstMarker.longitude}
                    latitude={firstMarker.latitude} anchor="bottom" >
                        <img src={markerIcon} />
                    </Marker>
                    <Marker draggable
                    onDrag={onSecondMarkerDrag}
                    longitude={secondMarker.longitude}
                    latitude={secondMarker.latitude} anchor="bottom" >
                        <img src={markerIcon} />
                    </Marker>
                    {showPopupFirst && (
                        <Popup longitude={firstMarker.longitude} latitude={firstMarker.latitude}
                            anchor="top"
                            closeOnClick="false"
                            onClose={() => setShowPopupFirst(false)}>
                            place 1
                            <br></br>
                            {firstMarker.longitude}
                            <br></br>
                            {firstMarker.latitude}
                            <br></br>
                            <img style={{width: "100%", height: "150px"}} src={YorkFirstImg} alt="New York's day"></img>
                        </Popup>)}
                    {showPopupSecond && (
                        <Popup longitude={secondMarker.longitude} latitude={secondMarker.latitude}
                            anchor="top"
                            closeOnClick="false"
                            onClose={() => setShowPopupSecond(false)}>
                            place 2
                            <br></br>
                            {secondMarker.longitude}
                            <br></br>
                            {secondMarker.latitude}
                            <br></br>
                            <img style={{width: "100%", height: "150px"}} src={YorkSecondImg} alt="New York's night"></img>
                        </Popup>)}
                </ReactMapGl>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
        </div>
    )
}

export default Breeds;