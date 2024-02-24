import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

function Skills({ appData, updateData, addData, removeData, sectionName }) {
  const handleChange = (e, cardId) => {
    const formData = new FormData(e.target.closest("form"));
    formData.set("id", cardId);
    const newCardObj = Object.fromEntries(formData);
    updateData(sectionName, newCardObj);
  };

  const handleAddData = () => {
    const newCardObj = {
      id: uuidv4(),
      skill: "",
    };
    addData(sectionName, newCardObj);
  };

  const handleRemoveData = (e, section, cardId) => {
    e.preventDefault();
    removeData(section, cardId);
  };

  const cards = appData[sectionName].map((card) => {
    return (
      <form key={card.id} action='' method='post'>
        <div className='delete-btn-wrapper'>
          <Button
            text='&times;'
            onClick={(e) => handleRemoveData(e, sectionName, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`skill_${card.id}`}>Skill</label>
          <input
            type='text'
            id={`skill_${card.id}`}
            name='skill'
            value={card.skill}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
      </form>
    );
  });
  return (
    <div className='section'>
      <details className='section-header'>
        <summary role='button' className="outline secondary"><h2>Skills</h2></summary>
        {cards}
        <Button text='+' onClick={handleAddData} />
      </details>
    </div>
  );
}
export default Skills;
