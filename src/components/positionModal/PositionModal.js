import React, { useState } from "react";
import { Button, Space, Modal, Input } from 'antd';
import { Marker, Popup, useMap, MapContainer, TileLayer } from 'react-leaflet';

import classes from './positionModal.module.css';

const PositionModal = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [zoom, setZoom] = useState("");

    const map = useMap();

    function latitudeChange(e) {
        setLatitude(e.target.value);
    }
    function longitudeChange(e) {
        setLongitude(e.target.value);
    }
    function zoomChange(e) {
        setZoom(e.target.value);
    }

    function btnModalClick() {
        setIsModalOpen(true);
    }

    const handleOk = () => {

        setIsModalOpen(false);

        map.setView([latitude, longitude], zoom);
        props.mapPosition({
            latitude: latitude,
            longitude: longitude,
        });
        props.mapZoom(zoom);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.positionWrapper}>
            <Space wrap>
                <Button onClick={btnModalClick} type="primary">Show modal</Button>
            </Space>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical">
                    <Input onChange={latitudeChange} addonBefore="latitude" placeholder="put latitude here" />
                    <Input onChange={longitudeChange} addonBefore="longitude" placeholder="put longitude here" />
                    <Input onChange={zoomChange} addonBefore="zoom" placeholder="put zoom here" />
                </Space>
            </Modal>
        </div>
    )
}

export default PositionModal;