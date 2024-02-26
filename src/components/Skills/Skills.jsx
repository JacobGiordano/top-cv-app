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
      skill: "New skill",
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
        <div className='input-group container-fluid'>
            <input
              type='text'
              id={`skill_${card.id}`}
              name='skill'
              value={card.skill}
              onChange={(e) => handleChange(e, card.id)}
            />
            <div className='delete-btn-wrapper'>
              <Button
                text='Delete'
                onClick={(e) => handleRemoveData(e, sectionName, card.id)}
              >
                <TrashCan />
              </Button>
            </div>
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
        <div className='outline'>
          {cards}
          <div className='add-card-wrapper'>
            <Button text='Add skill' onClick={handleAddData} />
          </div>
        </div>
      </details>
    </div>
  );
}
export default Skills;
