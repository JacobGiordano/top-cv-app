import { Fragment } from "react";

import { v4 as uuidv4 } from "uuid";

const getInputType = (objKey) => {
  let type = null;
  switch (objKey) {
    case "email":
      type = objKey;
      break;
    case "phone":
      type = "tel";
      break;
    case "start_date":
      type = "date";
      break;
    case "end_date":
      type = "date";
      break;
    default:
      type = "text";
      break;
  }
  return type;
};

function Form({ cardData }) {
  let inputs = [];
  for (const [key, value] of Object.entries(cardData)) {
    key !== 'id' && inputs.push(
      <div className="input-group" key={uuidv4()}>
        <label htmlFor={key}>{key}</label>
        <input type={getInputType(key)} id={key} value={value}/>
      </div>
    );
  }
  return <form action='POST'>{inputs}</form>;
}
export default Form;
