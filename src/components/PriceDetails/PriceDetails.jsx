import React from 'react'

const PriceDetails = () => {
  return (
    <div>
      <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Pricing Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-inter-medium " htmlFor="rent">Rent <span className='text-red-500 text-sm'>*</span></label>
            <div className="relative">
              <input
                id="rent"
                type="text"
                placeholder="₹ / Month"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-inter-medium" htmlFor="security">Security  <span className='text-red-500 text-sm'>*</span></label>
            <div className="relative">
              <input
                id="security"
                type="text"
                placeholder="₹ / Month"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-inter-medium" htmlFor="maintenanceType">Maintenance  <span className='text-red-500 text-sm'>*</span></label>
            <div className="relative">
              <select
                id="maintenanceType"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              >
                <option value="not-included" >Maintenance</option>
                <option value="in-rent">Included In Rent</option>
                <option value="extra">Extra Maintenance</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-inter-medium" htmlFor="maintenanceAmount">Maintenance  <span className='text-red-500 text-sm'>*</span></label>
            <div className="flex space-x-4">
              <input
                id="maintenanceAmount"
                type="text"
                placeholder="₹ Maintenance"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              >
                <option value="monthly">Monthly</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-inter-medium" htmlFor="additionalPricing">Additional Pricing details to convey to agent?</label>
          <textarea
            id="additionalPricing"
            placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
      </form>
    </div >
  )
}

export default PriceDetails
