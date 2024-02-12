import { useState } from "react";
import Card  from "./Card/Card";

import "../styles/Section.css";
import sampleData from "../assets/sample-data";

function Section({ children, section }) {
  const cards = sampleData[section].map(cardData => {
    return <Card key={cardData.id} cardData={cardData} />
  })
  return (
    <div className='section' data-section={section}>
      {children}
      {cards}
    </div>
  );
}
export default Section;
