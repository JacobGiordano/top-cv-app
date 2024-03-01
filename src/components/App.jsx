import "../styles/App.css";
import "../styles/global.css";

import sampleData from "../assets/sample-data.js";
import clearedData from "../assets/cleared-data.js";

import Column from "./Column";
import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Logo from "./icons/Logo.jsx";
import Preview from "./Preview/Preview.jsx";
import { useState } from "react";

import PersonalInfo from "./Personal/PersonalInfo.jsx";
import Experience from "./Experience/Experience.jsx";
import Education from "./Education/Education.jsx";
import Skills from "./Skills/Skills.jsx";

function App() {
  const [appData, setAppData] = useState(sampleData);

  const updateData = (section, newCardObj) => {
    const newSectionData = appData[section].map((card) =>
      card.id === newCardObj.id ? newCardObj : card
    );
    setAppData({ ...appData, [section]: newSectionData });
  };

  const addData = (section, newCardObj) => {
    const newSectionData = appData[section];
    newSectionData.push(newCardObj);
    setAppData({ ...appData, [section]: newSectionData });
  };

  const removeData = (section, cardId) => {
    const newSectionData = appData[section].filter((card) => {
      return card.id !== cardId ? card : null;
    });
    setAppData({ ...appData, [section]: newSectionData });
  }

  const clearData = () => {
    setAppData(clearedData);
  }
  
  const useSampleData = () => {
    setAppData(sampleData);
  }

  return (
    <div className="app">
      <Header>
        <Column classes="column column-row justify-start">
          <Logo />
          <h1 className="app-title">ResuMe</h1>
        </Column>
        <Column classes="column column-row justify-end">
          <Button text='Clear' onClick={clearData}/>
          <Button text='Load Example' onClick={useSampleData} />
        </Column>
      </Header>
      <Main>
        <Column classes="inputs column column-left  overflow-auto">
          <PersonalInfo
            appData={appData}
            updateData={updateData}
            sectionName='personal'
          />
          <Experience
            appData={appData}
            updateData={updateData}
            addData={addData}
            removeData={removeData}
            sectionName='experience'
          />
          <Education
            appData={appData}
            updateData={updateData}
            addData={addData}
            removeData={removeData}
            sectionName='education'
          />
          <Skills
            appData={appData}
            updateData={updateData}
            addData={addData}
            removeData={removeData}
            sectionName='skills'
          />
        </Column>
        <Column classes="preview column column-right">
          <Preview appData={appData} />
        </Column>
      </Main>
    </div>
  );
}

export default App;
