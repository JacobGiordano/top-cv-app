function Experience({ appData, updateData, sectionName }) {
  const handleChange = (e, cardId) => {
    const formData = new FormData(e.target.closest("form"));
    formData.set("id", cardId);
    const newCardObj = Object.fromEntries(formData);
    updateData(sectionName, newCardObj);
  };

  const cards = appData[sectionName].map((card) => {
    return (
      <form key={card.id} action='' method='post'>
        <div className='input-group'>
          <label htmlFor={`name_${card.id}`}>Name</label>
          <input
            type='text'
            id={`name_${card.id}`}
            name="name"
            value={card.name}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`position_${card.id}`}>Position</label>
          <input
            type='text'
            id={`position_${card.id}`}
            name="position"
            value={card.position}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`description_${card.id}`}>Description</label>
          <textarea
            type='text'
            id={`description_${card.id}`}
            name="description"
            value={card.description}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`start-date_${card.id}`}>Start Date</label>
          <input
            type='text'
            id={`start-date_${card.id}`}
            name="start_date"
            value={card.start_date}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`end-date_${card.id}`}>End Date</label>
          <input
            type='text'
            id={`end-date_${card.id}`}
            name="end_date"
            value={card.end_date}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor={`location_${card.id}`}>Location (optional)</label>
          <input
            type='text'
            id={`location_${card.id}`}
            name="location"
            value={card.location}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
      </form>
    );
  });
  return (
    <div className='section'>
      <h2>Experience</h2>
      {cards}
    </div>
  );
}
export default Experience;
