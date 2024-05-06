import { MapContainer, Marker, TileLayer } from "react-leaflet";

const MapView = () => {
  const position = [51.505, -0.09]; // Latitude and Longitude of the center of the map

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
