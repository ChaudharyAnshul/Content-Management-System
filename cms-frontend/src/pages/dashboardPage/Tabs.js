import React, { useState } from "react";
import { FaIcons } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { Terms } from "../../components/Term/Terms";
import { ManageUsers } from "../../components/ManageUsers/ManageUsers";
import { baseURL } from "../../request/baseURL.js";

export default function Tabs({ onTabChange }) {
  const BASE_URL = baseURL
  const [activeTab, setActiveTab] = useState("terms");

  const handleTermCreation = (termName, termType) => {
    console.log(termName, " ", termType);
    // try {
    //   const response = await fetch('', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(''),
    //   });

    //   if (response.ok) {
    //     console.log("Term created successfully");
    //   } else {
    //     console.error("Error creating term:", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error:", error.message);
    // }
  }

  const handleStudentCreation = async (file) => {
    const formData = new FormData();
    formData.append('file', file)
    console.log("File selected:", file.name);
    // TODO: Call backend API to upload and process this file to DB
    try {
      const fileUploadResponse = await fetch(BASE_URL + "/user/createUsers", {
        method: 'POST',
        body: formData,
      });
      if (fileUploadResponse.ok) {
        console.log("File processed: ", file.name);
        // const response = await fileUploadResponse.json();
        alert('Student(s) created successfully!😊')
      } else {
        console.log("Error occurred in file upload!");
        alert("Error occurred in file upload!😨");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTerms = () => {
    setActiveTab("terms");
    console.log("in Terms");
    onTabChange(<Terms/>);
  };

  const toggleCourses = () => {
    setActiveTab("courses");
    console.log("in courses");
    onTabChange(<div>This is Courses Tab</div>);
  };

  const toggleManageUsers = () => {
    setActiveTab("manageusers");
    console.log("in manage users");
    onTabChange(<ManageUsers onFileUpload={handleStudentCreation} />);
  };

  return (
    <>
      <div className="nav-tabs">
        <h4 style={{ cursor: "pointer" }} onClick={() => toggleTerms()}>
          Term
        </h4>
        <h4 style={{ cursor: "pointer" }} onClick={() => toggleCourses()}>
          Courses
        </h4>
        <h4 style={{ cursor: "pointer" }} onClick={() => toggleManageUsers()}>
          Manage Users
        </h4>
      </div>
    </>
  );
}
