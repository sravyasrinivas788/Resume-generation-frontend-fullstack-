

import React, { useState } from 'react';
import { Input, Button, List, Card, message } from 'antd';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Placement.css'; // Import your CSS file
import Navbars from './Navbars'; // Adjust the path based on your project structure
import Buttonss from './Buttonss';
import img1 from "./selected.jpg"
import ResumeComponent from './ResumeComponent';

function Placement() {
  const [skills, setSkills] = useState('');
  const [matchingResumes, setMatchingResumes] = useState([]);
  const { resumeId } = useParams();
  

  const searchBySkills = () => {
    axios.post('/api/user/search-by-intrested', { skills })
      .then((response) => {
        const resumes = response.data;
        setMatchingResumes(resumes);

        if (resumes.length === 0) {
          message.info('No matching resumes found for the specified skills.');
        }
      })
      .catch((error) => {
        console.error('Error fetching matching resumes:', error);
        message.error('Error fetching matching resumes. Please try again.');
      });
  };

  const viewResume = (filename) => {
    // Open the selected resume in a new tab
    window.open(`/api/user/view-pdf/${filename}`, '_blank');
  };

  return (
    <div>
      <Navbars/>
      <Buttonss/>
      
       <h3 style={{ textAlign: 'center',color: 'rgb(161, 107, 21)' }}>Highilted Resumes</h3>
      <h4 style={{ textAlign: 'center',color: 'rgb(161, 107, 21)' }}>Students of 2024</h4>

      {/* Apply styles from the external CSS file */}
      
      <div className="student-div">
  <div className="student-image">
    <Link  href="https://htmlcolorcodes.com/colors/light-orange/">click</Link>
  {/* <img src={img1} alt="Student 1" className="student-image"  /> */}
  
  
  </div>
  <div className="student-info">
  
    <h4 className="sname">Sravyasri</h4>
    <p>
      I have done BE in Computer science engineering. I planned to do MS. So I
      prepared for GRE for nearly one and a half years. I really worked very
      hard to get a high score but I couldn’t. Tears welled up in eyes when I
      saw the score because while attempting the test I had a feel like ‘I am
      doing good’. I took the test during my final year. The date was 07 Aug
      2018 (Wednesday). It was very hard for me to digest. I felt very bad.
      Wept, Wept, Wept Wept…. I was in a thought to retake the test. At that
      time, my college’s campus interview season started.
    </p>
  </div>
</div>

<div className="student-div">
  <div className="student-image">
    {/* Add the image source for Student 2 */}
  </div>
  <div className="student-info">
    <h4 className="sname">Akanksha</h4>
    <p>
      I attended a mock PI before my actual interview to get some experience
      before the D-Day. And from the moment i entered the hall to the moment
      i came back, it was a terrible nightmare. They made me feel my knowledge
      was absolutely low and i dint possess any technical skills. Somehow i
      gathered some courage as the first real interview i had to face was just
      a few days away and that too of IIMC.
    </p>
  </div>
</div>
<div style={{ backgroundColor: ' #385728', margin: '10px', padding: '10px'}}>
  

    <div className="placement-container"  style={{ border: '20px solid #ddd', padding: '20px', width: '100%', margin: 'auto',  }}>
    <h5><i>Find Resumes</i></h5>
      <div className="search-bar">
        <h6></h6>
        <Input
          placeholder="Enter job "
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          size="large" // Set the size of the input to large
        />
        
        <Button style={{backgroundColor:"grey"}} onClick={searchBySkills}>
          Search
        </Button>
      </div>
      <h6>Matched Resumes</h6>
      <List
      
        grid={{ gutter: 16, column: 3 }}
        dataSource={matchingResumes}
        renderItem={(resume) => (
          <List.Item>
            {/* Use the ResumeComponent for each resume */}
            <ResumeComponent resume={resume} />
          </List.Item>
        )}
        
        // renderItem={(resume) => (
        //   <List.Item>
            
        //     <Card
        //       title={resume.filename}
        //       extra={
        //         <Link to={`/api/user/view-pdf/${resume.filename}`} onClick={() => window.open(`/api/user/view-pdf/${resume.filename}`, '_blank')}>
        //           View Resume
        //         </Link>
        //       }
        //     >
        //       <p>Roll Number: {resume.RollNumber}</p>
        //       {/* Display additional details based on your resume model */}
        //     </Card>
        //   </List.Item>
        // )}
      />
    </div>
    </div>
    </div>
  );
}

export default Placement;


