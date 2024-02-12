import "../styles/App.css";

import Column from "./Column";
import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Logo from "./Logo";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Preview from "./Preview/Preview.jsx";

function App() {
  return (
    <>
      <Header>
        <Column>
          <Logo />
          <h1>App name</h1>
        </Column>
        <Column>
          <Button text='text' />
          <Button text='more text' />
        </Column>
      </Header>
      <Main>
        <Column>
          <Section section="personal">
            <SectionHeader text='Personal' buttonText='+' />
          </Section>
          <Section section="experience">
            <SectionHeader text='Experience' buttonText='+' />
          </Section>
          <Section section="education">
            <SectionHeader text='Education' buttonText='+' />
          </Section>
          <Section section="skills">
            <SectionHeader text='Skills' buttonText='+' />
          </Section>
        </Column>
        <Column>
          <Preview />
        </Column>
      </Main>
    </>
  );
}

export default App;
