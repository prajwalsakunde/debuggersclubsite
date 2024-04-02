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

import Photosvalue from './photos'

const GalleryDsply =() =>{
  const [index, setIndex] = useState(-1);

  return (
    <div className="gallery mx-5">
      <div className="relative  justify-center my-7 items-center text-center">
        <a>
          <h2 className="sm:text-4xl md:text-6xl lg:text-9xl font-sans font-light text-indigo-900 ">Gallery          </h2>
        </a>
      </div>
      <PhotoAlbum photos={Photosvalue} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={Photosvalue}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

export default GalleryDsply;