import React from 'react'
import { CiCamera } from "react-icons/ci";
const PropertyImages = () => {
  return (
    <div>
      <form className=" mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className=" mb-6 text-sm">Add Photos / Videos to attract more tenants!  </h2>
        <p className="mb-2 text-gray-700 text-sm">
          Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc.
        </p>

        <div className="border border-gray-300 h-64 rounded-lg flex  items-center justify-center">
          <div className=" p-6 rounded-lg flex flex-col items-center">
            <label htmlFor="file-portal">
              <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
                <CiCamera className="text-4xl" />
                <p className="capitalize text-white bg-[#122b49e4] text-xs p-2 rounded">+ Add Photos now</p>
              </div>
            </label>
            <input
              hidden
              id="file-portal"
              type="file"
              multiple
            // onChange={handleFileChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PropertyImages
