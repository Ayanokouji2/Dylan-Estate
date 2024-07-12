import React from 'react';
import { FaPhone, FaBuilding, FaHome, FaBath, FaRulerCombined, FaDog, FaPlug, FaBolt, FaCheckCircle, FaTimesCircle, FaClock, FaDoorOpen } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-2">1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 (545 Sq.ft.)</h1>
      <p className="text-gray-700 mb-4">Gokul village chs 2 Shanti Park, near st. Xaviours High school</p>

      <div className="flex justify-between items-center mb-6">
        <div className="w-full">
          <div className="relative h-64 bg-gray-200 mb-2 flex items-center justify-center">
            <AiOutlineArrowLeft className="absolute left-4 text-2xl cursor-pointer"/>
            <AiOutlineArrowRight className="absolute right-4 text-2xl cursor-pointer"/>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">+ Add Photos Now</button>
          </div>
          <p className="text-gray-500">Property ID : 99999999</p>
        </div>
        <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold">₹ 20,000 / Month</h3>
          <p className="text-gray-700">Rent-Negotiable</p>
          <h3 className="text-xl font-bold">₹ 20,000</h3>
          <p className="text-gray-700 mb-4">Deposit</p>
          <div>
            <h4 className="text-lg font-semibold mb-2">Send an Inquiry for this property?</h4>
            <form className="space-y-4">
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-600"/>
                <input type="text" placeholder="+91-9999999999" className="w-full px-3 py-2 border rounded-md"/>
              </div>
              <div className="flex items-center gap-2">
                <FaBuilding className="text-gray-600"/>
                <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded-md"/>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineMail className="text-gray-600"/>
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md"/>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-600"/>
                <input type="text" placeholder="+91-999-999-9999" className="w-full px-3 py-2 border rounded-md"/>
              </div>
              <textarea placeholder="I would like more information about Sector 5, shanti nagar, anubhav society" className="w-full px-3 py-2 border rounded-md"></textarea>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">SEND INQUIRY</button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Property Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <FaHome />, label: "Two (2)", description: "Bedrooms" },
          { icon: <FaBath />, label: "One(1)", description: "Bathrooms" },
          { icon: <FaRulerCombined />, label: "580", description: "Sq. Ft." },
          { icon: <FaDoorOpen />, label: "Ground", description: "Property on Floor" },
          { icon: <FaBuilding />, label: "4", description: "Total Floors" },
          { icon: <FaClock />, label: "East", description: "Facing" },
          { icon: <FaTimesCircle />, label: "No Balcony", description: "Balcony" },
          { icon: <FaHome />, label: "Semi-furnished", description: "Furnishing" },
          { icon: <FaHome />, label: "Any (Family / Bachelor)", description: "Tenant Preference" },
          { icon: <FaHome />, label: "Normal tiles white", description: "Flooring" },
          { icon: <FaClock />, label: "Immediate", description: "Availability" },
          { icon: <FaHome />, label: "Municipal Corporation (BMC)", description: "Water Supply" },
          { icon: <FaDog />, label: "Yes", description: "Pets Allowed" },
          { icon: <FaCheckCircle />, label: "Allowed", description: "Non-Veg" },
          { icon: <FaPlug />, label: "No / Rare Powercut", description: "Electricity Status" },
          { icon: <FaClock />, label: "5 Years", description: "Property Age" },
          { icon: <FaHome />, label: "Flats & Apartments", description: "Property Type" },
          { icon: <FaCheckCircle />, label: "Yes", description: "Gated Security" }
        ].map(({ icon, label, description }, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-blue-500 text-xl">{icon}</div>
            <div>
              <p className="text-lg font-semibold">{label}</p>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
