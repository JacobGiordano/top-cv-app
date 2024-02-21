import "../styles/App.css";
import sampleData from "../assets/sample-data.js";

import Column from "./Column";
import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Logo from "./Logo";
import Preview from "./Preview/Preview.jsx";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import PersonalInfo from "./Personal/PersonalInfo.jsx";
import Experience from "./Experience/Experience.jsx";
import Education from "./Education/Education.jsx";
import Skills from "./Education/Skills.jsx";

function App() {
  const [appData, setAppData] = useState(sampleData);

  const updateData = (section, newCardObj) => {
    const newSectionData = appData[section].map((card) =>
      card.id === newCardObj.id ? newCardObj : card
    );
    setAppData({ ...appData, [section]: newSectionData });
  };

  return (
    <>
      <Header>
        <Column>
          <Logo />
          <h1>App name</h1>
        </Column>
        <Column>
          <Button text='Clear' />
          <Button text='Load Example' />
        </Column>
      </Header>
      <Main>
        <Column>
          <PersonalInfo
            appData={appData}
            updateData={updateData}
            sectionName='personal'
          />
          <Experience
            appData={appData}
            updateData={updateData}
            sectionName='experience'
          />
          <Education
            appData={appData}
            updateData={updateData}
            sectionName='education'
          />
          <Skills
            appData={appData}
            updateData={updateData}
            sectionName='skills'
          />
        </Column>
        <Column>
          <Preview appData={appData} />
        </Column>
      </Main>
    </>
  );
}

export default App;
