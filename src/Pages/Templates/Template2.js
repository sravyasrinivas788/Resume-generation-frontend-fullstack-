import React ,{ useEffect, useState } from "react";
import "../../resources/templates.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
function Template2() {
  const user = JSON.parse(localStorage.getItem("Student"));
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    // Convert Buffer to Base64
    const arrayBufferView = new Uint8Array(user.profileImage.data);
    const blob = new Blob([arrayBufferView], { type: "image/jpg" });
    const reader = new FileReader();

    reader.onload = function () {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(blob);
  }, [user.profileImage.data]);
  console.log("imageSrc:", imageSrc);

  return (
    <div className="template1-parent">
      <div className="top d-flex flex-column">
        <h1>
          {user.Name.toUpperCase()} 
        </h1>
        <div>
        {imageSrc && <img src={imageSrc} alt="Profile" style={{ width: '100px', height: '100px' }} />}
        
          <p>{user.Email}</p>
          <p>{user.RollNumber}</p>
          <p>{user.Mobile}</p>
          <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer">
          <span className="linkedin-heading">LinkedIn</span>
           <FaLinkedin /> 
          </a>
        </div>
      </div>

      <div className="divider mt-3"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Objective</h3>
        <hr />
        <p>{user.Personal}</p>
      </div>
      <div className="divider mt-3"></div>

      <div className="education mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{education.Year} : </b>
              </h6>
              <p>
                <b>{education.Qualification}</b> with{" "}
                <b>{education.Percentage}%</b> in {education.Institution}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Projects</h3>
        <hr />
        {user.projects.map((projects) => {
          return (
            
                <div className="d-flex flex-column">
                  <h6>
                    <b>
                      {projects.ProjectName} [{projects.Domain}] {" "}
                    </b>
                  </h6>
                  <br/>
                  <p>{projects.Descreption}</p>
                  <br/>
                </div>
              );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Experience</h3>
        <hr />
        {user.internships.map((internships) => {
          return (
            <div className="d-flex flex-column">
            <h6 style={{ width: 250 }}>
              <b>{internships.Name}  </b>
              <br/>
              <br/>
              <i>{internships.Organisation}</i>
              
            </h6>
            
    
            <br/>
            <p>{internships.Des}</p>
            <br/>
            
            
           
          </div>
          
        );
        
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((skills) => {
          return (
            <div className='d-flex align-items-center'>
                <h6>
                    <b>Languages:<i>{skills.Languages}</i></b>
                    <br/>
                    <br/>
                    <b>Frameworks:<i>{skills.Frameworks}</i></b>
                    <br/>
                    <br/>
                    <b>Libraries:<i>{skills.Libs}</i></b>
                    <br/>
                    <br/>
                    <b>Areas of Intrest:<i>{skills.Intrest}</i></b>
                    <br/>
                    <br/>
                </h6>

            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Template2;