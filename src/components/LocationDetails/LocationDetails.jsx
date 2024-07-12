import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationDetails = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [buildingName, setBuildingName] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');

  const handleChange = async (e, setState) => {
    setState(e.target.value);

    // Combine address parts into a query string
    const address = `${buildingName}, ${locality}, ${landmark}, ${city}`;
    
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: address,
          format: 'json',
          limit: 1
        }
      });

      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
    }
  };

  return (
    <div>
      <form className="mx-auto p-6 bg-white  rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Address Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="buildingName">Building/ Society Name</label>
            <input
              id="buildingName"
              type="text"
              value={buildingName}
              onChange={(e) => handleChange(e, setBuildingName)}
              placeholder="Enter Apartment Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="locality">Locality / Area</label>
            <input
              id="locality"
              type="text"
              value={locality}
              onChange={(e) => handleChange(e, setLocality)}
              placeholder="Eg: Sheetal Nagar"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="landmark">Landmark / Street Name</label>
            <input
              id="landmark"
              type="text"
              value={landmark}
              onChange={(e) => handleChange(e, setLandmark)}
              placeholder="Prominent Landmark"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => handleChange(e, setCity)}
              placeholder="Mumbai, Maharashtra"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>

      <div className='p-10'>
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  );
};

export default LocationDetails;
