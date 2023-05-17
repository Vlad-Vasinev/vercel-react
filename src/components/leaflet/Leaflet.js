import React, { useState } from "react";
import { Marker, Popup, useMap, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import ChooseMap from "../chooseMap/ChooseMap";
import PositionModal from "../positionModal/PositionModal";

const LeafletMap = () => {

    //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    // https://c.tile.openstreetmap.fr/osmfr/10/301/385.png;
    //https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/10/300/384.png
    //https://tiles.stadiamaps.com/tiles/osm_bright/8/75/95.png
    //https://a.tile.thunderforest.com/outdoors/9/151/191.png

    const baseMaps = {
        main: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        alidade: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png",
        osm: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png",
        outdoor: "https://a.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=db5ae1f5778a448ca662554581f283c5",
    }
    const [stateMap, setStateMap] = useState("main");
    const [mapPosition, setMapPosition] = useState({
        latitude: "40.7811",
        longitude: "-74.0630",
    });

    const [mapZoom, mapZoomState] = useState(13);
    const position = [mapPosition.latitude, mapPosition.longitude];

    console.log(position);
    console.log(mapZoom);

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    return (
        <MapContainer style={{ height: "500px", width: "100%", position: "relative" }}
        center={position}
        zoom={mapZoom}
        scrollWheelZoom={false}>
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/#map=11/40.7811/-74.0630">OpenStreetMap</a> contributors'
                url={baseMaps[stateMap]}
            />
            <ChooseMap stateMap = {setStateMap}></ChooseMap>
            <PositionModal mapPosition = {setMapPosition} mapZoom = {mapZoomState} ></PositionModal>
            <Marker position={position}>
                <Popup>
                    pretty Manhattan :D <br /> big city :DD
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LeafletMap;
