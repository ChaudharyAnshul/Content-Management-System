import React, { useState } from "react";
import "./Terms.css";
import { baseURL } from "../../request/baseURL.js";

export const Terms = () => {
  const BASE_URL = baseURL
  // State variables for the input field, dropdown, and selected option
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("PAST");
  const options = ["PAST", "CURRENT", "FUTURE"];

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle changes in the dropdown
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = async () => {
    if (inputValue === "") {
      alert("Please Enter a Valid Name for the Term");
    } else {
      // TODO: Send Data back to Parent Component
      console.log("Input Value:", inputValue);
      console.log("Dropdown Value:", dropdownValue);
      const termRequest = {
        termName: inputValue,
        termType: dropdownValue
      }
      try {
        const response = await fetch(BASE_URL+'/term/create-term', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(termRequest),
        });

        if (response.ok) {
          console.log("Term created successfully");
          alert('Term created successfully 😊')
        } else {
          console.error("Error creating term:", response.statusText);
          alert('Error creating Term 😨')
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
      setInputValue("");
      setDropdownValue("PAST");
    }
  };
  return (
    <div className="my-form-container">
      <h6 style={{ textAlign: "center" }}>Create a New Term</h6>
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
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="form-select"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleButtonClick} className="form-button">
        Submit
      </button>
    </div>
  );
};
