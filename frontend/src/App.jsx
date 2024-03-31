import React from 'react';
import './App.css';
import Startpg from './components/startpage';
import NavBar from './components/navbar';
import AnimCursor from './components/Animatedcursor';
import { Scrollbars } from 'react-custom-scrollbars';
import Members from './components/members';
import Eventpg from './components/Eventpg';
import Contactpg from './components/Contactpg';

function App() {
  return (
    <div className='  main-body w-screen h-screen bg-white '>
      <Scrollbars>
        <AnimCursor />
        <NavBar />
        <Startpg />
        <Eventpg />
        <Members />
        <Contactpg />
      </Scrollbars>
    </div>
  );
}

export default App;
