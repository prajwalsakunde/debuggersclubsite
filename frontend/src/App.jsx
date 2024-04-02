import React, { useState, useEffect } from "react";
import "./App.css";
import Startpg from "./components/startpage";
import NavBar from "./components/navbar";
import AnimCursor from "./components/Animatedcursor";
import Members from "./components/members";
import Eventpg from "./components/Eventpg";
import Contactpg from "./components/Contactpg";
import LoadingBar from 'react-top-loading-bar'
import Footer from "./components/Footer";
import Loader from "./components/loader";
import Gallery from "./components/Gallery";
import GalleryDsply from "./components/GalleryDsply";
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setShowLoader(false);
        document.body.classList.remove('disable-scroll'); // Enable scrolling
        document.querySelectorAll('.yarl-container *').forEach(element => {
          element.style.cursor = 'auto';
        });
      }, 1000); // Show loader for 2 seconds
    }, 1500); // Simulating loading time
  }, []);

  useEffect(() => {
    if (showLoader) {
      document.body.classList.add('disable-scroll'); // Disable scrolling
    }
  }, [showLoader]);

  return (
    <div className="main-body w-screen h-screen bg-white">
      {showLoader && <Loader />}
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
      {/* <Gallery/> */}
      {/* <GalleryDsply /> */}
      <Contactpg />
      <Footer />
    </div>
  );
}

export default App;
