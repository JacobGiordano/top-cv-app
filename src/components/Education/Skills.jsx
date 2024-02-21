function Skills({ appData, updateData, sectionName }) {
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
          <label htmlFor={`skill_${card.id}`}>Name</label>
          <input
            type='text'
            id={`skill_${card.id}`}
            name="skill"
            value={card.skill}
            onChange={(e) => handleChange(e, card.id)}
          />
        </div>
      </form>
    );
  });
  return (
    <div className='section'>
      <h2>Skills</h2>
      {cards}
    </div>
  );
}
export default Skills;
