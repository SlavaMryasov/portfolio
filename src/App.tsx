import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/sections/mainSection/MainSection';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
import MyPhoto from "./assets/photo.webp"
import { Contacts } from './layout/sections/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
      <Skills/>
      <Projects/>
      {/* <AboutMe src={MyPhoto}/> */}
      {/* <Contacts/> */}
    </div>
  );
}

export default App;
