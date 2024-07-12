import React from 'react';
import { useState } from 'react';
const PropertyDetails = () => {
  const [type, setType] = useState()
  const [propAge, setPropAge] = useState()
  const [selectedBathrooms, setSelectedBathrooms] = useState('');
  const [selectedBalcony, setSelectedBalcony] = useState('');
  const [selectedTenantPreference, setSelectedTenantPreference] = useState('');
const [selectedAvailability, setSelectedAvailability] = useState('');
  return (
    <form className=" mx-auto p-6 bg-white rounded-lg">


      <div className="mb-4">
        <label className="block text-gray-700">Property For:</label>
        <div className="mt-2">
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="propertyFor" value="rent" className="form-radio" />
            <span className="ml-2">Rent</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="propertyFor" value="sale" className="form-radio" />
            <span className="ml-2">Sale</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Property Type:</label>
        <div className="mt-2">
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="propertyType" value="residential" className="form-radio" />
            <span className="ml-2">Residential</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="propertyType" value="commercial" className="form-radio" />
            <span className="ml-2">Commercial</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="propertyType" value="land" className="form-radio" />
            <span className="ml-2">Land/Plot</span>
          </label>
        </div>
      </div>

      <div className=' flex gap-5'>
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Built up Area</label>
          <input type="text" className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm outline-none  border-2" placeholder="Sq. Ft." />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700">Carpet Area</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none p-2 border-2" placeholder="Sq. Ft." />
        </div>
      </div>
      <div className='flex gap-5 '>
        <div className="mb-4">
          <label className="block text-gray-700">Property on Floor</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none p-2 border-2" placeholder="Floor" />
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-700">Total Floors</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none p-2 border-2" />
        </div>

        <div className="mb-4 flex-grow">
          <label className="block  text-gray-700">Property Facing</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none p-2 border-2">
            <option>Select</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Property Age</label>
        <div className="mt-2 flex items-center text-xs gap-4">
          {['Less than 1 Year', '1 - 3 Years', '3 - 5 Years', '5 - 10 Years', 'Greater than 10 Years'].map(age => (
            <label
              key={age}
              className={`inline-flex items-center border-2 p-2 rounded-full ${propAge === age ? 'bg-blue-500 text-white' : ''
                }`}
              onClick={() => setPropAge(age)}
            >
              <input type="radio" name="propertyAge" hidden value={age} className="form-radio" />
              <span className="ml-2">{age}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">BHK Type</label>
        <div className="mt-2 flex items-center text-xs gap-4">
          {['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'].map(bhk => (
            <label
              key={bhk}
              className={`inline-flex items-center border-2 p-2 rounded-full ${type === bhk ? 'bg-blue-500 text-white' : ''
                }`}
            >
              <input
                type="radio"
                name="bhkType"
                hidden
                value={bhk}
                checked={type === bhk}
                onChange={() => setType(bhk)}
                className="form-radio"
              />
              <span className="ml-2">{bhk}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Bathrooms/Toilets</label>
        <div className="mt-2 flex items-center text-xs gap-4">
          {['1', '2', '3', '4', '5', '6+'].map(bath => (
            <label
              key={bath}
              className={`inline-flex items-center border-2 p-2 rounded-full ${selectedBathrooms === bath ? 'bg-blue-500 text-white' : ''
                }`}
            >
              <input
                type="radio"
                name="bathrooms"
                hidden
                value={bath}
                checked={selectedBathrooms === bath}
                onChange={() => setSelectedBathrooms(bath)}
                className="form-radio"
              />
              <span className="ml-2">{bath}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Balcony</label>
        <div className="mt-2 flex items-center text-xs gap-4">
          {['0', '1', '2', '3', '4+'].map(balcony => (
            <label
              key={balcony}
              className={`inline-flex items-center border-2 p-2 rounded-full ${selectedBalcony === balcony ? 'bg-blue-500 text-white' : ''
                }`}
            >
              <input
                type="radio"
                name="balcony"
                hidden
                value={balcony}
                checked={selectedBalcony === balcony}
                onChange={() => setSelectedBalcony(balcony)}
                className="form-radio"
              />
              <span className="ml-2">{balcony}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
  <label className="block text-gray-700">Tenant Preference</label>
  <div className="mt-2 flex items-center text-xs gap-4">
    {['Any', 'Family', 'Bachelor (Men)', 'Bachelor (Women)'].map(preference => (
      <label
        key={preference}
        className={`inline-flex items-center border-2 p-2 rounded-full ${
          selectedTenantPreference === preference ? 'bg-blue-500 text-white' : ''
        }`}
      >
        <input
          type="radio"
          name="tenantPreference"
          hidden
          value={preference}
          checked={selectedTenantPreference === preference}
          onChange={() => setSelectedTenantPreference(preference)}
          className="form-radio"
        />
        <span className="ml-2">{preference}</span>
      </label>
    ))}
  </div>
</div>

<div className="mb-4">
  <label className="block text-gray-700">Availability</label>
  <div className="mt-2 flex items-center text-xs gap-4">
    {['Immediate', 'within 15 days', 'within 1 month', 'within 2 months'].map(availability => (
      <label
        key={availability}
        className={`inline-flex items-center border-2 p-2 rounded-full ${
          selectedAvailability === availability ? 'bg-blue-500 text-white' : ''
        }`}
      >
        <input
          type="radio"
          name="availability"
          hidden
          value={availability}
          checked={selectedAvailability === availability}
          onChange={() => setSelectedAvailability(availability)}
          className="form-radio"
        />
        <span className="ml-2">{availability}</span>
      </label>
    ))}
  </div>
</div>

      <div className="mb-6">
        <label className="block text-gray-700">Property Description</label>
        <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none p-2 border-2" placeholder="Add a description for your property to attract the best tenant"></textarea>
      </div>


    </form>
  );
};

export default PropertyDetails;
