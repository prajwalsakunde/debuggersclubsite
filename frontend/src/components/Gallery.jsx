import React, { useState } from "react";
import "./images.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "yet-another-react-lightbox/plugins/captions.css";
import { slides } from "./data";

function Gallery({ data, onClick }) {
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const handleClickImage = (index) => {
    onClick(index);
  };
  const imageUrls = [
    "/events/codeefiesta.jpg",
    "/events/dsbda.jpg",
    "/events/engineersday.jpg",
    "/events/equinox.jpg",
    "/events/experttalkfuture.jpg",
    "/events/experttalkgate.jpg",
    "/events/halktalk.jpg",
    "/events/resession.jpg",
    "/events/teachersday.png",
    // Add more image URLs here
  ];

  return (
    <div
      id="gallery"
      className="App pt-5 gallery1 flex justify-center relative w-full h-screen "
    >
      <div className="absolute  text-center  ">
        <h2 className="sm:text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">
          Debuggers Gallery
        </h2>
      </div>
      <>
        <Lightbox
          plugins={[Captions, Fullscreen, Zoom, Thumbnails]}
          captions={{
            showToggle: true,
            descriptionTextAlign: "end",
          }}
          // open={open}
          // close={() => setOpen(false)}
          // slides={slides}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
        <div className="images-containerss">
          {data.map((slide, idx) => (
            <div onClick={() => setIndex(idx)} key={idx} className="imagess">
              <img src={slide.src} alt={slide.src} />
              <p className="mt-2 sm:text-xl xl:text-2xl font-thin">
                {slide.title}
              </p>
              <p className="mt-2 sm:text-xl xl:text-2xl font-thin">tru h kya</p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default Gallery;
