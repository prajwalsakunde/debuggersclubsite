import { useState } from "react";
import { slides } from "./data";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Photosvalue from "./photos";

const GalleryDsply = () => {
  const [index, setIndex] = useState(-1);

  // Function to calculate targetRowHeight based on screen size
  const getTargetRowHeight = () => {
    if (window.innerWidth >= 1024) {
      // lg and xl screens
      return 400;
    } else if (window.innerWidth >= 768) {
      // md screens
      return 300;
    } 
    else if (window.innerWidth>=500){
      return 200;
    }
    else {
      // sm and xs screens
      return 100;
    }
  };

  const [targetRowHeight, setTargetRowHeight] = useState(getTargetRowHeight);

  // Update targetRowHeight when window size changes
  window.addEventListener("resize", () => {
    setTargetRowHeight(getTargetRowHeight());
  });

  return (
    <div className="gallery mx-2 my-7 sm:mx-5 ">
      <div className="relative  justify-center my-2 sm:my-7 items-center text-center">
        <a>
          <h2 className="text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">
            Gallery
          </h2>
        </a>
      </div>
      <PhotoAlbum
        photos={Photosvalue} //using photos from photo js
        layout="rows"
        targetRowHeight={targetRowHeight}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={slides} //using slides from data js
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default GalleryDsply;
