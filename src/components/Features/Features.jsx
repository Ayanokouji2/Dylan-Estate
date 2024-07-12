import React, { useState } from "react";

const Features = () => {
  const [formData, setFormData] = useState({
    nonVeg: "",
    petsAllowed: "",
    electricity: "",
    waterSupply: "",
    furnishing: "",
    additionalFeatures: [],
    tiles: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e, category) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <form className="space-y-4 p-4">
      <div className="border-b p-4 rounded">
        <h2 className="text-lg font-medium mb-2">General Features</h2>
        <div className="space-y-2">
          <div>
            <label className="block font-medium">Non-Veg</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="nonVeg"
                  value="Allowed"
                  checked={formData.nonVeg === "Allowed"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Allowed
              </label>
              <label>
                <input
                  type="radio"
                  name="nonVeg"
                  value="Not Allowed"
                  checked={formData.nonVeg === "Not Allowed"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Not Allowed
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium">Pets Allowed</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="petsAllowed"
                  value="Yes"
                  checked={formData.petsAllowed === "Yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="petsAllowed"
                  value="No"
                  checked={formData.petsAllowed === "No"}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium">Electricity</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="electricity"
                  value="Rare/No Powercut"
                  checked={formData.electricity === "Rare/No Powercut"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Rare/No Powercut
              </label>
              <label>
                <input
                  type="radio"
                  name="electricity"
                  value="Frequent Powercut"
                  checked={formData.electricity === "Frequent Powercut"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Frequent Powercut
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium">Water Supply</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="waterSupply"
                  value="Municipal Corporation (BMC)"
                  checked={formData.waterSupply === "Municipal Corporation (BMC)"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Municipal Corporation (BMC)
              </label>
              <label>
                <input
                  type="radio"
                  name="waterSupply"
                  value="Borewell"
                  checked={formData.waterSupply === "Borewell"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Borewell
              </label>
              <label>
                <input
                  type="radio"
                  name="waterSupply"
                  value="Both"
                  checked={formData.waterSupply === "Both"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Both
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b p-4 rounded">
        <h2 className="text-lg font-medium mb-2">Furnishing</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-20">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="furnishing"
                value="Fully Furnished"
                checked={formData.furnishing === "Fully Furnished"}
                onChange={handleChange}
                className="  custom-radio  "
              />
              Fully Furnished
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="furnishing"
                value="Semi Furnished"
                checked={formData.furnishing === "Semi Furnished"}
                onChange={handleChange}
                className="custom-radio"
              />
              Semi Furnished
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="furnishing"
                value="Unfurnished"
                checked={formData.furnishing === "Unfurnished"}
                onChange={handleChange}
                className="custom-radio"
              />
              Unfurnished
            </label>
          </div>
        </div>
      </div>

      <div className="border-b p-4 rounded">
        <h2 className="text-lg font-medium mb-2">Additional Features</h2>
        <div className=" grid grid-cols-3 gap-3 justify-between">
          {["Air Conditioning", "Ceiling Fans", "Refrigerator", "Washing machine", "Microwave", "Oven"].map(
            (feature) => (
              <label key={feature} className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  name="additionalFeatures"
                  value={feature}
                  checked={formData.additionalFeatures.includes(feature)}
                  onChange={(e) => handleCheckboxChange(e, "additionalFeatures")}
                  className="w-6 h-6 p-1 text-slate-100 "
                />
                <p>{feature}</p>
              </label>
            )
          )}
        </div>
      </div>

      <div className="border-b p-4 rounded">
        <h2 className="text-lg font-medium my-4">Tiles</h2>
        <div className=" grid grid-cols-3 items-center ">
          {["Normal White Tiles", "Marble", "Vitrified Tiles"].map((tile) => (
            <label key={tile} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="tiles"
                value={tile}
                checked={formData.tiles.includes(tile)}
                onChange={(e) => handleCheckboxChange(e, "tiles")}
                className="w-6 h-6 p-1 text-slate-100 "
              />
              {tile}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Features;
