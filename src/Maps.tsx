import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = { lat: 64.1265, lng: -21.8174 }; // Reykjavík

export default function Maps() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={12}
      />
    </LoadScript>
  );
}
