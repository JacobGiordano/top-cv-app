import Button from "../Button";
import TrashCan from "../icons/TrashCan";
import { v4 as uuidv4 } from "uuid";

function Experience({ appData, updateData, addData, removeData, sectionName }) {
  const handleChange = (e, cardId) => {
    const formData = new FormData(e.target.closest("form"));
    formData.set("id", cardId);
    const newCardObj = Object.fromEntries(formData);
    updateData(sectionName, newCardObj);
  };

  const handleAddData = () => {
    const newCardObj = {
      id: uuidv4(),
      name: "New Experience",
      position: "",
      description: "",
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
        <summary role='button'>{card.name}</summary>
        <form className="outline" action='' method='post'>
          <div className='input-group'>
            <div className='grid'>
              <label htmlFor={`name_${card.id}`}>Experience name</label>
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
            <label htmlFor={`position_${card.id}`}>Position</label>
            <input
              type='text'
              id={`position_${card.id}`}
              name='position'
              value={card.position}
              onChange={(e) => handleChange(e, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`description_${card.id}`}>Description</label>
            <textarea
              type='text'
              id={`description_${card.id}`}
              name='description'
              value={card.description}
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
      <form className="outline" key={card.id} action='' method='post'>
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
          <label htmlFor={`position_${card.id}`}>Position</label>
          <input
            type='text'
            id={`position_${card.id}`}
            name='position'
            value={card.position}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`description_${card.id}`}>Description</label>
          <textarea
            type='text'
            id={`description_${card.id}`}
            name='description'
            value={card.description}
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
          <h2>Experience</h2>
        </summary>
        {cards}
        <div className="add-card-wrapper">
          <Button classString="add-card" text='+' onClick={handleAddData} />
        </div>
      </details>
    </div>
  );
}
export default Experience;
