import React, { useState } from "react";
import "./CourseForm.css";
import { baseURL } from "../../request/baseURL.js";

const CourseForm = () => {
  const BASE_URL = baseURL
  const [courseName, setCourseName] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [term, setTerm] = useState("");
  const [professorEmail, setProfessorEmail] = useState("");
  const [maxCount, setMaxCount] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "courseName":
        setCourseName(value);
        break;
      case "courseNumber":
        setCourseNumber(value);
        break;
      case "term":
        setTerm(value);
        break;
      case "professorEmail":
        setProfessorEmail(value);
        break;
      case "maxCount":
        setMaxCount(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForCreateCourse = async (event) => {
    event.preventDefault();
    // Implement logic to submit the form data (e.g., API call)
    const formData = {
      courseName,
      courseNumber,
      term,
      professorEmail,
      maxCount,
    };
    // Call Course Creation API
    try {
      const response = await fetch(BASE_URL+'/course/create-course', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Course created successfully");
        alert('Course created successfully 😊')
      } else {
        console.error("Error creating Course:", response.statusText);
        alert('Error creating Course 😨')
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    // Reset form fields
    setCourseName("");
    setCourseNumber("");
    setTerm("");
    setProfessorEmail("");
    setMaxCount("");
  };
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
      setErrorMessage("Please select a valid CSV file.");
    }
  };

  const handleSubmitStudentCSV = async (event) => {
    event.preventDefault();
    // Implement logic to submit form data (e.g., API call)
    if (!courseNumber || !selectedFile) {
      setErrorMessage("Please enter the course number and upload a CSV file.");
      return;
    }
    // REST API Calls
    console.log('Course selected ', courseNumber);
    console.log('selected file: ', selectedFile);
    // creating and populating Form Data
    const formData = new FormData();
    formData.append('csvFile', selectedFile)
    try {
      const response = await fetch(BASE_URL+'/course/create-course/'+courseNumber, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Students added successfully");
        alert('Students added successfully 😊')
      } else {
        console.error("Error adding Students:", response.statusText);
        alert('Error adding Students 😨')
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    // Reset form fields
    setCourseNumber("");
    setSelectedFile(null);
    setErrorMessage("");
  };
  const handleChangeNumber = (event) => setCourseNumber(event.target.value);
  return (
    <>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmitForCreateCourse}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={courseName}
          onChange={handleChange}
          placeholder="Enter course name"
          required
        />

        <label htmlFor="courseNumber">Course Number:</label>
        <input
          type="text"
          id="courseNumber"
          name="courseNumber"
          value={courseNumber}
          onChange={handleChange}
          placeholder="Course Number must be a Number"
          required
        />

        <label htmlFor="term">Term:</label>
        <input // Changed to text field
          type="text"
          id="term"
          name="term"
          value={term}
          onChange={handleChange}
          placeholder="Must be an existing term (For example: Spring2023)"
          required
        />

        <label htmlFor="professorEmail">Professor Email:</label>
        <input
          type="email"
          id="professorEmail"
          name="professorEmail"
          value={professorEmail}
          onChange={handleChange}
          placeholder="Enter Professor Email"
          required
        />

        <label htmlFor="maxCount">Maximum Enrollment Count:</label>
        <input
          type="text"
          id="maxCount"
          name="maxCount"
          value={maxCount}
          onChange={handleChange}
          placeholder="Maximum class strength for this course (must be a number)"
          required
        />

        <button type="submit">Create Course</button>
      </form>
      <h3 style={{ marginTop: "30px" }}>Add Students to Course</h3>
      <form onSubmit={handleSubmitStudentCSV}>
        <label htmlFor="courseNumber">Course Number:</label>
        <input
          type="text"
          id="courseNumber"
          name="courseNumber"
          value={courseNumber}
          onChange={handleChangeNumber}
          placeholder="Course Number must be an existing Course Number"
          required
        />

        <label htmlFor="fileUpload">Upload CSV File:</label>
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          accept=".csv"
          onChange={handleFileChange}
          required
        />
        {errorMessage && <p className="error">{errorMessage}</p>}

        <button type="submit">Add Students</button>
      </form>
    </>
  );
};

export default CourseForm;
