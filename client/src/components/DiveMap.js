import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const DiveMapView = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -25.344,
    lng: 131.031,
  };

  const center1 = {
    lat: 4.114563062214055,
    lng: 118.62879876416193,
  };

  const center2 = {
    lat: -8.340539,
    lng: 115.091951,
  };
  const center3 = {
    lat: 9.448773876251815,
    lng: 97.879069387392,
  };

  return (
    <div>
      <h3>South-East Asia </h3>
      <br />
      <br />
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        {/* <LoadScript googleMapsApiKey={googlemapsapikey}> */}
        <div className="region1_top1">
          <h3> Top1: Sipadan Island, Malaysia </h3>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center1}
            zoom={15}
          >
            {/* <Marker position={center1} title="Uluru" /> */}
            <Marker position={center1} />
          </GoogleMap>
        </div>
        <br />
        <div className="region1_top2">
          <h3> Top2: Bali, Indonesia</h3>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center2}
            zoom={10}
          >
            {/* <Marker position={{ lat: 18.52043, lng: 73.856743 }} /> */}
            <Marker position={center2} />
          </GoogleMap>
        </div>
        <br />
        <div className="region1_top3">
          <h3> Top3: Surin Islands, Thailand</h3>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center3}
            zoom={12}
          >
            <Marker position={center3} />
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default DiveMapView;
