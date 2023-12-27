import React from "react";
import "../../resources/templates.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Template4() {
  const user = JSON.parse(localStorage.getItem("Student"));

  return (
    <div className="template4-parent">
      <div className="template4-left">
        <div className="header">
          <h1>{user.Name.toUpperCase()}</h1>
          
        </div>

        <div className="divider"></div>

        <div className="objective">
          <h3>Objective</h3>
          <p>{user.Personal}</p>
        </div>

        <div className="divider"></div>

        <div className="education">
          <h3>Education</h3>
          {user.education.slice(0, user.education.length / 2).map((education) => (
            <div key={education.Institution}>
              <p>
                {education.Qualification} | {education.Institution} | {education.Year}
              </p>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        <div className="projects">
          <h3>Projects</h3>
          {user.projects.slice(0, user.projects.length / 2).map((project) => (
            <div key={project.ProjectName}>
              <h4>{project.ProjectName}</h4>
              <p>{project.Descreption}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="template4-right">
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {user.skills.slice(0, user.skills.length / 2).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="divider"></div>

        <div className="contact">
          <h3>Contact</h3>
          <p>{user.RollNumber}</p>
          <p>{user.Email}</p>
          <p>{user.Mobile}</p>
          <p>{user.Branch}</p>
          <a href={user.LinkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={user.GitHub} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Template4;
