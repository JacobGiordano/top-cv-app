import Button from "../Button";
import TrashCan from "../icons/TrashCan";
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
        <div className='input-group'>
        <div className='grid'>
            <label htmlFor={`name_${card.id}`}>Skill</label>
            <div className='delete-btn-wrapper'>
              <Button
                text='Delete'
                onClick={(e) => handleRemoveData(e, sectionName, card.id)}
              >
                <TrashCan />
              </Button>
            </div>
          </div>
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
        <summary role='button' className='outline secondary'>
          <h2>Skills</h2>
        </summary>
        {cards}
        <Button text='+' onClick={handleAddData} />
      </details>
    </div>
  );
}
export default Skills;
