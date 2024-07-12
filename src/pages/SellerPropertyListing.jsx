import React, { useState } from 'react';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import PriceDetails from '../components/PriceDetails/PriceDetails';
import LocationDetails from '../components/LocationDetails/LocationDetails';
import PropertyImages from '../components/PropertyImages/PropertyImages';
import Features from '../components/Features/Features';

const SellerPropertyListing = () => {
  const [active, setActive] = useState(1);
  const Forms = {
    1: <PropertyDetails />,
    2: <LocationDetails />,
    3: <Features />,
    4: <PriceDetails />,
    5: <PropertyImages />
  }
  const handleActive = () => {
    setActive(prev => prev < 5 ? prev + 1 : prev);
  }
  return (
    <div className='min-h-[80vh] flex justify-center items-center '>
      <div className='max-w-3xl shadow-xl'>
        <div className='uppercase grid grid-cols-5 font-merri-regular items-center  overflow-hidden rounded-t-2xl bg-[#FCF8F4]  border-b-4 border-slate-500'>
          <div
            className={`${active === 1 ? 'bg-[#EDF2F8]' : ''} p-4  text-center hover:cursor-pointer px-3`}
            onClick={() => setActive(1)}
          >
            Property Details
          </div>
          <div
            className={`${active === 2 ? 'bg-[#EDF2F8]' : ''} p-4  text-center hover:cursor-pointer px-3  `}
            onClick={() => setActive(2)}
          >
            Location Details
          </div>
          <div
            className={`${active === 3 ? 'bg-[#EDF2F8]' : ''} p-4  text-center hover:cursor-pointer px-3  `}
            onClick={() => setActive(3)}
          >
            Features  Amenities
          </div>
          <div
            className={`${active === 4 ? 'bg-[#EDF2F8]' : ''} py-7  text-center hover:cursor-pointer px-3  `}
            onClick={() => setActive(4)}
          >
            Price Details
          </div>
          <div
            className={`${active === 5 ? 'bg-[#EDF2F8]' : ''} p-4  text-center hover:cursor-pointer px-3  `}
            onClick={() => setActive(5)}
          >
            Property Images
          </div>
        </div>
        <div className='max-h-80 overflow-y-auto form-section'>
          {
            Forms[active]
          }
        </div>
        <div className=' bg-[#122B49] px-16 py-5 text-xs rounded-b-2xl flex  items-center text-white justify-between'>
          <p>Need Help? <b>Call 999999999</b></p>
          <button className='text-white  text-xs rounded-lg px-8 py-2 bg-[#15365fb5]/40' onClick={handleActive}>{active <= 4 ? "Next" : "Save and Post"}</button>
        </div>
      </div>
    </div>
  );
};

export default SellerPropertyListing;
