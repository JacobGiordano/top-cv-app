import { v4 as uuidv4 } from "uuid";
import "../../styles/Preview.css";

function Preview({ appData, reference }) {
  const data = appData;
  const personal = data.personal[0];
  const experience = data.experience;
  const education = data.education;
  const skills = data.skills;
  return (
    <div className='preview-wrapper' ref={reference}>
      <div className="preview-header container-fluid">
        <h2>{personal.name}</h2>
        {personal.title && <h3 className="personal-title">{personal.title}</h3>}
      </div>
      <div className='container column-left'>
        <div className='section personal-info-section'>
          <div className="personal-info">
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
            {personal.location && <div>{personal.location}</div>}
            {personal.website && <div>{personal.website}</div>}
          </div>
        </div>
        <div className='section education-section'>
          <h3>Education</h3>
          {education.map((edu) => {
            return (
              <div className="card education" key={uuidv4()}>
                <h4>{edu.degree_certification}</h4>
                <div>{edu.name}</div>
                {edu.area_of_focus && <div>{edu.area_of_focus}</div>}
                <div className="date-wrapper">                  
                  <span>{edu.start_date}</span>
                  <span className="date-separator"> - </span>
                  <span>{edu.end_date}</span>
                </div>
                {edu.location && <div>{edu.location}</div>}
              </div>
            );
          })}
        </div>
        {appData["skills"].length >=1 && <div className='section skills-section'>
          <h3>Skills</h3>
          <ul className="skills-list">
          {skills.map((skillObj) => {
            return (
              <li className="card skill" key={uuidv4()}>
                <span>{skillObj.skill}</span>
              </li>
            );
          })}
          </ul>
        </div>}
      </div>
      <div className='container column-right'>
        <div className='section experience-section'>
          <h3>Experience</h3>
          {experience.map((exp) => {
            return (
              <div className="card experience" key={uuidv4()}>
                <h4>{exp.name}</h4>
                <div>{exp.position}</div>
                {exp.location && <span>{exp.location} | </span>}<span className="date-wrapper">                  
                  <span>{exp.start_date}</span>
                  <span className="date-separator"> - </span>
                  <span>{exp.end_date}</span>
                </span>
                <div>{exp.description}</div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Preview;
