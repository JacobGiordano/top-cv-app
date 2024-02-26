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
      <div className='container'>
        <div className='personal-info'>
          <h3>Personal Info</h3>
          <h4>{personal.name}</h4>
          <div>{personal.email}</div>
          <div>{personal.phone}</div>
          <div>{personal.location}</div>
        </div>
        <div className='education'>
          <h3>Education</h3>
          {education.map((exp) => {
            return (
              <div key={uuidv4()}>
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
        <div className='skills'>
          <h3>Skills</h3>
          {skills.map((skillObj) => {
            return (
              <div key={uuidv4()}>
                <div>{skillObj.skill}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='container'>
        <div className='experience'>
          <h3>Experience</h3>
          {experience.map((exp) => {
            return (
              <div key={uuidv4()}>
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
