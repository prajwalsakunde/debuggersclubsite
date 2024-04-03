import React, { useState, useEffect } from "react";
import "./App.css";
import Startpg from "./components/startpage";
import NavBar from "./components/navbar";
import AnimCursor from "./components/Animatedcursor";
import Members from "./components/members";
import Eventpg from "./components/Eventpg";
import Contactpg from "./components/Contactpg";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";
import Loader from "./components/loader";
import Gallery from "./components/Gallery";
import GalleryDsply from "./components/GalleryDsply";
import { animateScroll as scroll } from "react-scroll";
import { Toaster } from 'react-hot-toast';
import toast from "react-hot-toast";
import eventss from './Imgs/Equinox.jpg';
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setShowLoader(false);
        document.body.classList.remove("disable-scroll");
      }, 1000);
    }, 1500);
  }, []);

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1500);
    scroll.scrollToTop();
  }, []);

  useEffect(() => {
    if (showLoader) {
      document.body.classList.add("disable-scroll");
    }
  }, [showLoader]);

  useEffect(() => {
    if (!showLoader && !toastShown) {
      setToastShown(true); // Update toastShown state
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-lg w-full bg-white shadow-lg rounded-lg  flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-20 w-20 rounded-full"
                  src={eventss}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Equinox 2024
                </p>
                <p className="mt-1 text-sm text-gray-500">🚀 Registration has officially kicked off on campus! Don't miss out – secure your spot now and register today!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ), {
        duration: Infinity // Set duration to Infinity for persistent toast
      });
    }
  }, [showLoader, toastShown]);

  return (
    <div className="main-body w-screen h-screen bg-white">
      <AnimCursor />

      {showLoader && <Loader />}
      {!showLoader && <Toaster position="top-center" />}

      <NavBar />
      <LoadingBar
        color="#FF204E"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Startpg />
      <Eventpg />
      <Members />
      {/* <Gallery/> */}
      <GalleryDsply />
      <Contactpg />
      <Footer />
    </div>
  );
}

export default App;
