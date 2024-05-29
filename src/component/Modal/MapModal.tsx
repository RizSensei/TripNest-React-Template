import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Modal_Layout from "./Modal_Layout";

import "leaflet/dist/leaflet.css";

const MapModal = ({ toggleMapModal }) => {
  const mapOptions = {
    center: [27.7172, 85.324],
    zoom: 13,
    maxZoom: 18,
    minZoom: 8,
  };
  return (
    <Modal_Layout>
      <div className="h-full w-full overflow-hidden">
        <MapContainer {...mapOptions} style={{ height: "500px" }} className="-z-0">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[27.720142769787746, 85.32124840262613]}>
            <Popup>Radisson Hotel Kathmandu</Popup>
          </Marker>
        </MapContainer>

        {/* close button */}
        <div className="z-50 absolute top-2 right-2 h-8 w-8 rounded-full border bg-white text-red-500 hover:bg-red-500 hover:text-white duration-300 ease-in-out transform cursor-pointer">
          <button
            onClick={() => toggleMapModal()}
            className="h-full w-full flex flex-col items-center justify-center"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </Modal_Layout>
  );
};

export default MapModal;
