import React, { useState } from "react";
import "./home.scss";
import Location from "../location/Location";
import FileBase64 from "react-file-base64";

export default function Home() {
  const [locationName, setLocationName] = useState("");
  const [locationOnMap, setLocationOnMap] = useState({});
  const [locationType, setLocationType] = useState("Business");
  const [logo, setLogo] = useState({});

  const changeLocationName = (e) => {
    setLocationName(e.target.value);
  };

  const changeLocationType = (e) => {
    setLocationType(e.target.value);
  };

  const getFiles = (files) => {
    setLogo({
      base64: files[0].base64,
      name: files[0].name,
      type: files[0].type,
      size: files[0].size,
    });
  };

  const saveHandler = () => {
    const locationData = {
      locationName: locationName,
      locationOnMap: {
        lat: locationOnMap.lat,
        lng: locationOnMap.lng,
      },
      locationType: locationType,
      logo: logo,
    };

    if (locationData.locationOnMap.lat && locationData.locationOnMap.lng) {
      localStorage.setItem("locationData", JSON.stringify(locationData));
    } else {
      alert("Please select location.");
    }
  };

  const cancelHandler = () => {
    setLocationName("");
    setLocationOnMap({});
    setLocationType("business");
    setLogo({});
  };

  const selectLocation = (latlng) => {
    setLocationOnMap({
      lat: latlng.lat,
      lng: latlng.lng,
    });
  };

  return (
    <div className="home">
      <form onSubmit={saveHandler}>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card mb-3">
                <div className="card-header text-left">Share location</div>
                <div className="card-bady">
                  <div className="row mt-3">
                    <div className="col-4">
                      <label className="ml-3">Location name:</label>
                    </div>
                    <div className="col-8 text-center">
                      <input
                        type="text"
                        onChange={changeLocationName}
                        value={locationName}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <label className="ml-3">Location on map:</label>
                    </div>
                    <div className="col-8 text-center">
                      <Location selectLocation={selectLocation} />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <label className="ml-3">Location type:</label>
                    </div>
                    <div className="col-8 text-center">
                      <select
                        onChange={changeLocationType}
                        className="form-control"
                        value={locationType}
                      >
                        <option>Business</option>
                        <option>Second option</option>
                        <option>Third option</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3 mb-3">
                    <div className="col-4 choose-logo">
                      <label className="ml-3">Logo:</label>
                    </div>
                    <div className="col-8 text-center">
                      <FileBase64
                        multiple={true}
                        onDone={getFiles}
                      />
                      <img src={logo.base64} style={{ width: "100px" }} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="save-btn mb-5" type="submit" value="Submit">
                Save
              </button>
              <button
                className="cancel-btn mb-5"
                onClick={cancelHandler}
                type="button"
              >
                Cancel
              </button>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
