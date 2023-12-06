import React, { useState } from "react";

const SelectOption = () => {
  const options = [
    "South-East Asia",
    "Asia Pacific",
    "Central  & South America",
    "Middle East & Red Sea",
    "North America",
    "Indian Ocean",
    "Africa",
    "Europe",
    "Caribbean",
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* {selectedOption !== '' && <p>Selected: {selectedOption}</p>} */}
    </div>
  );
};

export default SelectOption;
