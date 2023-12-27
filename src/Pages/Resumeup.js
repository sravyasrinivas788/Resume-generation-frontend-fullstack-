import React, { useState } from 'react';
import axios from 'axios';

const Resumeup = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
  const [matchScore, setMatchScore] = useState(null);

  const handleResumeFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleJobDescriptionFileChange = (event) => {
    setJobDescriptionFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('jobDescription', jobDescriptionFile);

      const response = await axios.post('http://localhost:5001/predict', formData);


      // Update the match score state
      setMatchScore(response.data.matchScore);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <label>Upload Resume: </label>
      <input type="file" onChange={handleResumeFileChange} />
      
      <label>Upload Job Description: </label>
      <input type="file" onChange={handleJobDescriptionFileChange} />

      <button onClick={handleUpload}>Upload Files</button>

      {matchScore !== null && (
        <div>
          <h3>Match Score: {matchScore}</h3>
          {/* Display other details as needed */}
        </div>
      )}
    </div>
  );
};

export default Resumeup;
