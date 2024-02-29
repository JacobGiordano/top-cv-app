import { v4 as uuidv4 } from "uuid";
import "../../styles/Preview.css";

function Preview({ appData }) {
  const data = appData;
  const personal = data.personal[0];
  const experience = data.experience;
  const education = data.education;
  const skills = data.skills;
  return (
    <div className='preview-wrapper grid'>
      <div className="container preview-header">
        <h2>{personal.name}</h2>
        <h3 className="personal-title">{personal.title}</h3>
      </div>
      <div className='container column-left'>
        <div className='section personal-info-section'>
          <div className="personal-info">
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
            <div>{personal.location}</div>
          </div>
        </div>
        <div className='section education-section'>
          <h3>Education</h3>
          {education.map((exp) => {
            return (
              <div className="card education" key={uuidv4()}>
                <h4>{exp.name}</h4>
                <div>{exp.degree_certification}</div>
                <div>{exp.area_of_focus}</div>
                <div>{exp.start_date}</div>
                <div>{exp.end_date}</div>
                <div>{exp.location}</div>
              </div>
            );
          })}
        </div>
        <div className='section skills-section'>
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
        </div>
      </div>
      <div className='container column-right'>
        <div className='section experience-section'>
          <h3>Experience</h3>
          {experience.map((exp) => {
            return (
              <div className="card experience" key={uuidv4()}>
                <h4>{exp.name}</h4>
                <div>{exp.position}</div>
                <div>{exp.description}</div>
                <div>{exp.start_date}</div>
                <div>{exp.end_date}</div>
                <div>{exp.location}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Preview;
