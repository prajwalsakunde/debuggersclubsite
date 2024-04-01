import React, { useState } from "react";
import "./App.css";
import Startpg from "./components/startpage";
import NavBar from "./components/navbar";
import AnimCursor from "./components/Animatedcursor";
import Members from "./components/members";
import Eventpg from "./components/Eventpg";
import Contactpg from "./components/Contactpg";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
function App() {
  return (
    <div className="  main-body w-screen h-screen bg-white ">
      {/* <Scrollbars> */}
      <AnimCursor />
      <NavBar />
      <Startpg />
      <Eventpg />
      <Members />
      <Contactpg />
      {/* <Gallery data={slides} /> */}
      {/* </Scrollbars> */}
    </div>
  );
}

export default App;
