import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./location.scss";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";

export default function Location({ selectLocation }) {
  return (
    <div className="location">
      <div className="container">
        <MapContainer
          center={{ lat: 35.77816, lng: 51.36644 }}
          zoom={13}
          animate={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker selectLocation={selectLocation} />
        </MapContainer>
      </div>
    </div>
  );
}
