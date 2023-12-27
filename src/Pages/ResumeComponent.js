// ResumeComponent.js

import React, { useState } from 'react';
import { Button, Card, message } from 'antd';
import axios from 'axios';

function ResumeComponent({ resume }) {
  const [placementAction, setPlacementAction] = useState('');

  const handlePlacementAction = async (action) => {
    try {
      // Send a request to the backend to update placement status
      await axios.post('/api/user/placement/action', { rollNumber: resume.RollNumber, action });

      // Notify the student on the frontend
      message.success(`Resume ${action.toLowerCase()} successfully`);

      // Optionally, you can refresh the list of resumes or update the UI as needed
      // ...

    } catch (error) {
      console.error('Error processing placement action:', error);
      message.error('Error processing placement action. Please try again.');
    }
  };
  const handleViewResume = () => {
    // Open the selected resume in a new tab
    window.open(`/api/user/view-pdf/${resume.filename}`, '_blank');
  }

  return (
    <Card title={resume.filename}>
      <p>Roll Number: {resume.RollNumber}</p>
      {/* Display additional details based on your resume model */}
      <Button style={{backgroundColor:"grey"}} onClick={() => handlePlacementAction('Accept')}>
        Accept
      </Button>
      <Button type="danger" onClick={() => handlePlacementAction('Reject')}>
        Reject
      </Button>
      <Button onClick={handleViewResume}>
        View Resume
      </Button>
    </Card>
  );
}

export default ResumeComponent;
