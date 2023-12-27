import React from 'react'
import '../../resources/templates.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
function Template1(){
    const user=JSON.parse(localStorage.getItem("Student"))
   
        
           return (
    <div className="template1-parent">
      <div className="top d-flex justify-content-between">
        <h1>
          {user.Name.toUpperCase()} 
          <br/>
          <br/>
          
          <h6 style={{margin:0}}>Bachelor of Technology</h6>
          <br/>
          
          
          <h6 style={{margin:0}}>CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY</h6>
        </h1>
        <div>
          <p>{user.Email}</p>
          <p>{user.RollNumber}</p>
          <p>{user.Mobile}</p>
          <p>
          
          <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer">
          <span className="linkedin-heading">LinkedIn</span>
           <FaLinkedin /> 
          </a>
         
          {/* <a href={user.GitHub} target="_blank" rel="noopener noreferrer">
            {user.GitHub}
          </a> */}
          </p>
         
        </div>
      </div>

      <div className="divider mt-3"></div>

      <div className="objective mt-3">
        <h3>Objective</h3>
        <hr />
        <p>{user.Personal}</p>
      </div>
      <div className="education mt-3">
        <h3>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                
                <b> {education.Year} : </b>
                
              </h6>
              
                <b>{education.Qualification}</b> with{" "}
                <b>{education.Percentage}%</b> in {education.Institution}
                
                
                    
                
                
               
              
            </div>
            


            

          );
          
        })}
      </div>
      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3>Projects</h3>
        <hr/>
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

<div className="experience mt-3">
  <h3>Experience</h3>
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
    // <div>
    //     Template1
    // </div>
    )
}
export default Template1;