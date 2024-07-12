import React from 'react'
import asset from '../assets/asset'
import BuyerForm from '../components/BuyerForm/BuyerForm'

const SellerHome = () => {
  return (
    <div className='h-[90vh] bg-[#122B49] px-32 pt-12 pb-[7.22rem]'>
      <div className='text-white '>
        <h2 className='text-3xl font-merri-regular'>Sell or Rent your Property For Free</h2>
        <p className='max-w-3xl py-3 font-merri-light'>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
      </div>
      <div className='my-4 flex flex-wrap justify-around '>
        <div className=' text-white   '>
        <p className='max-w-xs text-xl font-merri-regular'>Upload your property in 4 simple steps</p>
        <ul className='text-sm flex flex-col gap-5 my-5'>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p className='font-merri-regular'>Add property to <span className='font-merri-extrabold'>Basic Details</span></p>
          </li>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p className='font-merri-regular'>Add property  <span className='font-merri-bold'>Location</span></p>
          </li>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p className='font-merri-regular'>Add property <span className='font-merri-extrabold'>Featues and amenities</span></p>
          </li>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p className='font-merri-regular'>Add your best <span className='font-merri-extrabold'>Property Shots</span></p>
          </li>
          
        </ul>
        </div>
        <div className='w-[32rem] '>
          <BuyerForm/>
        </div>
      </div>
      
    </div>
  )
}

export default SellerHome
