import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

function Education({ appData, updateData, addData, removeData, sectionName }) {
  const handleChange = (e, cardId) => {
    const formData = new FormData(e.target.closest("form"));
    formData.set("id", cardId);
    const newCardObj = Object.fromEntries(formData);
    updateData(sectionName, newCardObj);
  };

  const handleAddData = () => {
    const newCardObj = {
      id: uuidv4(),
      name: "New Education",
      degree_certification: "",
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
        <summary role='button'>{card.name}</summary>
        <form action='' method='post'>
          <div className='delete-btn-wrapper'>
            <Button
              text='&times;'
              onClick={(e) => handleRemoveData(e, sectionName, card.id)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor={`name_${card.id}`}>Name</label>
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
      </details>
    ) : (
      <form key={card.id} action='' method='post'>
        <div className='delete-btn-wrapper'>
          <Button
            text='&times;'
            onClick={(e) => handleRemoveData(e, sectionName, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`name_${card.id}`}>Name</label>
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
        <Button text='+' onClick={handleAddData} />
      </details>
    </div>
  );
}
export default Education;
