import React, { useState } from 'react';
import axios from 'axios';

function Page1() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!selectedFile) {
      alert('Please upload a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);  // Add the selected file to FormData

    try {
      // Send the FormData to the Flask backend
      const response = await axios.post('http://127.0.0.1:5000/rules', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log('Response from server:', response.data);
      alert('File successfully uploaded and saved on the server!');
    } catch (error) {
      console.error('Error sending file:', error);
      console.log(error)
      alert('Error sending file.');
    }
  };

  return (
    <div>
      <h1>Upload JSON File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".json" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page1;
