// src/components/maps/LocationMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapPin } from 'lucide-react';

// Fix for default marker icon
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationMap = () => {
  // Replace these coordinates with your clinic's location
  const position = [34.079061, 72.610648]; // Example: Islamabad coordinates

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>
        <Marker position={position}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">Zia Dental Care</h3>
              <p className="text-gray-600">Unnamed Road, Topi</p>
              <p className="text-gray-600">Khyber Pakhtunkhwa, Pakistan</p>
              <p className="text-gray-600">Phone: (+92) 314 7776565</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;