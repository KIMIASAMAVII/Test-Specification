import React, { useState } from "react";
import L from "leaflet";
import marker from "../../marker.svg";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker({ selectLocation }) {
  const [position, setPosition] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const myIcon = L.icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
  });

  // const [info, setInfo] = useState({});

  const map = useMapEvents({
    click(e) {
      map.locate();
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());

      setLat(e.latlng.lat);
      setLng(e.latlng.lng);

      selectLocation(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  // const editHandler = () => {};
  // const closeHandler = () => {};

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>
        <div className="card">
          <div className="card-header">Location Details:</div>
          <div className="card-body">
            <div className="text mb-2">Latitude: {lat}</div>
            <div className="text mb-2">Longitude: {lng}</div>
            <button className="edit-btn">Edit</button>
            <button className="close-btn">Close</button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
