import React from 'react'

const LocationDetails = () => {
  return (
    <div>
      <form className=" mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Address Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="buildingName">Building/ Society Name</label>
            <input
              id="buildingName"
              type="text"
              placeholder="Enter Apartment Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="locality">Locality / Area</label>
            <input
              id="locality"
              type="text"
              placeholder="Eg: Sheetal Nagar"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="landmark">Landmark / Street Name</label>
            <input
              id="landmark"
              type="text"
              placeholder="Prominent Landmark"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              placeholder="Mumbai, Maharashtra"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default LocationDetails
