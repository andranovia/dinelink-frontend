import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";
import { cn } from "@/lib/utils";

const MapDefault = ({ className }: { className?: string }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className={cn("w-[100%] h-[10rem] rounded-md relative z-10", className)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapDefault;
