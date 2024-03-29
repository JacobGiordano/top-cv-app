import Button from "../Button";
import { v4 as uuidv4 } from "uuid";
import TrashCan from "../icons/TrashCan";

function Education({ appData, updateData, addData, removeData, sectionName, preventSubmission }) {
  const handleChange = (e, cardId) => {
    const formData = new FormData(e.target.closest("form"));
    formData.set("id", cardId);
    const newCardObj = Object.fromEntries(formData);
    updateData(sectionName, newCardObj);
  };

  const handleAddData = () => {
    const newCardObj = {
      id: uuidv4(),
      degree_certification: "New Education",
      name: "",
      area_of_focus: "",
      start_date: "",
      end_date: "",
      location: "",
    };
    addData(sectionName, newCardObj);
  };

  const handleRemoveData = (e, section, cardId) => {
    e.preventDefault();
    removeData(section, cardId);
  };

  const cards = appData[sectionName].map((card) => {
    return appData[sectionName].length > 1 ? (
      <details key={card.id}>
        <summary role='button'>{card.degree_certification}</summary>
        <form className='outline' action='' method='post' onKeyDown={e => preventSubmission(e)}>
          <div className='input-group'>
            <div className='first-input-wrapper'>
              <label htmlFor={`degree_certification_${card.degree_certification}`}>
                Degree or Certification
              </label>
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
              id={`degree_certification_${card.id}`}
              name='degree_certification'
              value={card.degree_certification}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`name_${card.name}`}>
              Education name
            </label>
            <input
              type='text'
              id={`name_${card.id}`}
              name='name'
              value={card.name}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`area_of_focus_${card.id}`}>Area of Focus (optional)</label>
            <textarea
              type='text'
              id={`area_of_focus_${card.id}`}
              name='area_of_focus'
              value={card.area_of_focus}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`start-date_${card.id}`}>Start Date</label>
            <input
              type='text'
              id={`start-date_${card.id}`}
              name='start_date'
              value={card.start_date}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`end-date_${card.id}`}>End Date</label>
            <input
              type='text'
              id={`end-date_${card.id}`}
              name='end_date'
              value={card.end_date}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`location_${card.id}`}>Location (optional)</label>
            <input
              type='text'
              id={`location_${card.id}`}
              name='location'
              value={card.location}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
        </form>
      </details>
    ) : (
      <form className='outline' key={card.id} action='' method='post' onKeyDown={e => preventSubmission(e)}>
        <div className='input-group'>
          <div className='grid'>
            <label htmlFor={`name_${card.id}`}>Name</label>
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
            id={`name_${card.id}`}
            name='name'
            value={card.name}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`degree_certification_${card.id}`}>
            Degree or Certificate
          </label>
          <input
            type='text'
            id={`degree_certification_${card.id}`}
            name='degree_certification'
            value={card.degree_certification}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`area_of_focus_${card.id}`}>Area of Focus</label>
          <textarea
            type='text'
            id={`area_of_focus_${card.id}`}
            name='area_of_focus'
            value={card.area_of_focus}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`start-date_${card.id}`}>Start Date</label>
          <input
            type='text'
            id={`start-date_${card.id}`}
            name='start_date'
            value={card.start_date}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`end-date_${card.id}`}>End Date</label>
          <input
            type='text'
            id={`end-date_${card.id}`}
            name='end_date'
            value={card.end_date}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`location_${card.id}`}>Location (optional)</label>
          <input
            type='text'
            id={`location_${card.id}`}
            name='location'
            value={card.location}
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
          <h2>Education</h2>
        </summary>
        {cards}
        <div className='add-card-wrapper'>
          <Button classString='add-card' text='+' onClick={handleAddData} />
        </div>
      </details>
    </div>
  );
}
export default Education;
