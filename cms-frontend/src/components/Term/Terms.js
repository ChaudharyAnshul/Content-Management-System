import React, { useState } from "react";
import './Terms.css'

export const Terms = () => {
  // State variables for the input field, dropdown, and selected option
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("option1");
  const options = ["PAST", "CURRENT", "FUTURE"]; // Replace with your dropdown options

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle changes in the dropdown
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Add your logic here based on the form values
    console.log("Input Value:", inputValue);
    console.log("Dropdown Value:", dropdownValue);
  };
  return (
    <div className="my-form-container">
      <h6 style={{ textAlign: 'center'}}>Create a New Term</h6>
      <label className="form-label">
        Term Name:
        <input
          className="form-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Term Name"
        />
      </label>

      <label className="form-label">
        Term Type:
        <select value={dropdownValue} onChange={handleDropdownChange} className="form-select">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleButtonClick} className="form-button">Submit</button>
    </div>
  );
};
