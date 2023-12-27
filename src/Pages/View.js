import { useState } from 'react';
import axios from 'axios';

function View({ resumeId }) {
  
  const [resumeContent, setResumeContent] = useState(null);

  const viewResume = async () => {
    try {
      const response = await axios.get(`/api/user/view-pdf/${resumeId}`, { responseType: 'blob' });
      const pdfUrl = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      setResumeContent(pdfUrl);
    } catch (error) {
      console.error('Error fetching resume:', error);
    }
  };

  return (
    <div>
      <button onClick={viewResume}>View Resume</button>
      {resumeContent && <embed src={resumeContent} type="application/pdf" width="100%" height="600px" />}
    </div>
  );
}

export default View;

