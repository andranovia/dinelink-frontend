import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import React from "react";
import { cn } from "@/lib/utils";

const DefaultIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
  popupAnchor: [0, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapDefault = ({
  className,
  position,
}: {
  className?: string;
  position?: [number, number];
}) => {
  return (
    <MapContainer
      center={position || [51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className={cn("w-[100%] h-[10rem] rounded-md relative z-10", className)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};

export default MapDefault;
