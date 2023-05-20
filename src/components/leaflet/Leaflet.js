import React, { useState, useCallback, useRef, useMemo } from "react";
import { useEventHandlers } from '@react-leaflet/core'
import { Marker, Popup, useMap, MapContainer, TileLayer, Polygon, useMapEvent, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import ChooseMap from "../chooseMap/ChooseMap";
import PositionModal from "../positionModal/PositionModal";

const LeafletMap = () => {

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

    var L = window.L;

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    function DraggableMarker(props) {
        const [draggable, setDraggable] = useState(false);
        const [position, setPosition] = useState([props.lat, props.lang]);
        const markerRef = useRef(null);
        const eventHandlers = useMemo(
            () => ({
                dragend() {
                    const marker = markerRef.current
                    if (marker != null) {
                        setPosition(marker.getLatLng())
                    }
                },
            }),
            [],
        )
        const toggleDraggable = useCallback(() => {
            setDraggable((d) => !d)
        }, [])

        return (
            <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                <Popup minWidth={90}>
                    <span onClick={toggleDraggable}>
                        {draggable
                            ? props.text_1 + ' ' + "draggable click to disable drag"
                            : props.text_2 + ' ' + 'not draggable click here to drag it'}
                    </span>
                </Popup>
            </Marker>
        )
    }

    const minePoly = [
        [40.7720, -74.0690],
        [40.7920, -74.0880],
        [40.7820, -74.0988],
        [40.7820, -74.1200],
    ]
    const colorOption = { color: "orange" };

    const POSITION_CLASSES = {
        bottomleft: 'leaflet-bottom leaflet-left',
        bottomright: 'leaflet-bottom leaflet-right',
        topleft: 'leaflet-top leaflet-left',
        topright: 'leaflet-top leaflet-right',
    }

    const BOUNDS_STYLE = { weight: 1 }

    function MinimapBounds({ parentMap, zoom }) {
        const minimap = useMap()

        const onClick = useCallback(
            (e) => {
                parentMap.setView(e.latlng, parentMap.getZoom())
            },
            [parentMap],
        )
        useMapEvent('click', onClick)

        const [bounds, setBounds] = useState(parentMap.getBounds())
        const onChange = useCallback(() => {
            setBounds(parentMap.getBounds())
            minimap.setView(parentMap.getCenter(), zoom)
        }, [minimap, parentMap, zoom])

        const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
        useEventHandlers({ instance: parentMap }, handlers)

        return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
    }

    function MinimapControl({ position, zoom }) {
        const parentMap = useMap()
        const mapZoom = zoom || 0

        const minimap = useMemo(
            () => (
                <MapContainer
                    style={{ height: 80, width: 80 }}
                    center={parentMap.getCenter()}
                    zoom={mapZoom}
                    dragging={false}
                    doubleClickZoom={false}
                    scrollWheelZoom={false}
                    attributionControl={false}
                    zoomControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
                </MapContainer>
            ),
            [],
        )

        const positionClass =
            (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
        return (
            <div className={positionClass}>
                <div className="leaflet-control leaflet-bar">{minimap}</div>
            </div>
        )
    }

    return (
        <MapContainer style={{ height: "500px", width: "100%", position: "relative" }}
            center={position}
            zoom={mapZoom}
            scrollWheelZoom={false}>
            <TileLayer
                url={baseMaps[stateMap]}
            />
            <ChooseMap stateMap={setStateMap}></ChooseMap>
            <PositionModal mapPosition={setMapPosition} mapZoom={mapZoomState} ></PositionModal>
            <Marker position={position}>
                <Popup>
                    pretty Manhattan :D <br />big city :DD
                </Popup>
            </Marker>
            <DraggableMarker
                lat={40.7620}
                lang={-74.0760}
                text_1="first marker"
                text_2="first marker" />
            <DraggableMarker
                lat={40.7820}
                lang={-74.0740}
                text_1="second marker"
                text_2="second marker" />
            <Polygon pathOptions={colorOption} positions={minePoly}></Polygon>
            <MinimapControl position="bottomleft" />
        </MapContainer>
    )
}

export default LeafletMap;
