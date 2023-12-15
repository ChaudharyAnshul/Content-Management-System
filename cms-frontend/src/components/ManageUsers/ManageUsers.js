import React, { useState } from 'react'
import './ManageUsers.css'

export const ManageUsers = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      // Perform any additional logic here (e.g., send the file to a server)
      if (selectedFile) {
        onFileUpload(selectedFile);
        // You can reset the selected file if needed
        setSelectedFile(null);
      } else {
        alert('Please select a file before uploading.😤');
      }
    };
  
    return (
      <div className='container'>
        <h5>Create Students</h5>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
        <button onClick={handleUpload}>Upload File</button>
      </div>
    );
}
