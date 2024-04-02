// App.js
import React from "react";
import "./App.css";
import Startpg from "./components/startpage";
import NavBar from "./components/navbar";
import AnimCursor from "./components/Animatedcursor";
import { Scrollbars } from "react-custom-scrollbars";
import Members from "./components/members";
import Eventpg from "./components/Eventpg";
import Contactpg from "./components/Contactpg";
import LoadingBar from 'react-top-loading-bar'
import { useEffect,useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(40);
    
    setTimeout(() => {
        setProgress(100);
    }, 1500);
}, []);

  return (
    
    <div className="main-body  w-screen h-screen bg-white">
      
      <AnimCursor />
      <NavBar />
      <LoadingBar
              color='#FF204E'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
      />
      
      <Startpg />
      <Eventpg />
      <Members />
      <Contactpg />
      <Footer/>
    </div>
  );
}

export default App;
