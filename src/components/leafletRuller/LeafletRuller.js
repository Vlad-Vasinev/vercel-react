import React from "react";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

import "./leaflet-ruler";
import "./leaflet-ruler.css";

const LeafletRuler = () => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        L.control.ruler().addTo(map);
    }, [map]);

    return null;
}

export default LeafletRuler;