import React, { useState } from "react";
import "./CourseForm.css";
const CourseForm = () => {
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

  const handleSubmitForCreateCourse = (event) => {
    event.preventDefault();
    // Implement logic to submit the form data (e.g., API call)
    console.log({
      courseName,
      courseNumber,
      term,
      professorEmail,
      maxCount,
    });
    const formData = {
      courseName,
      courseNumber,
      term,
      professorEmail,
      maxCount,
    };
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

  const handleSubmitStudentCSV = (event) => {
    event.preventDefault();
    // Implement logic to submit form data (e.g., API call)
    if (!courseNumber || !selectedFile) {
      setErrorMessage("Please enter the course number and upload a CSV file.");
      return;
    }
    // Process selected file (e.g., read data and prepare request payload)
    console.log({ courseNumber, selectedFile });
    const formData = {
      courseNumber,
      selectedFile: selectedFile, // Store file name instead of entire object
    };
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
          required
        />

        <label htmlFor="courseNumber">Course Number:</label>
        <input
          type="number"
          id="courseNumber"
          name="courseNumber"
          value={courseNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="term">Term:</label>
        <input // Changed to text field
          type="text"
          id="term"
          name="term"
          value={term}
          onChange={handleChange}
          required
        />

        <label htmlFor="professorEmail">Professor Email:</label>
        <input
          type="email"
          id="professorEmail"
          name="professorEmail"
          value={professorEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="maxCount">Maximum Enrollment Count:</label>
        <input
          type="number"
          id="maxCount"
          name="maxCount"
          value={maxCount}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Course</button>
      </form>
      <h3 style={{ marginTop: "30px" }}>Add Students to Course</h3>
      <form onSubmit={handleSubmitStudentCSV}>
        <label htmlFor="courseNumber">Course Number:</label>
        <input
          type="number"
          id="courseNumber"
          name="courseNumber"
          value={courseNumber}
          onChange={handleChangeNumber}
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
