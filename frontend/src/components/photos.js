const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
// const unsplashLink = (id, width, height) =>
//   `https://source.unsplash.com/${id}/${width}x${height}`;
const imageUrls = [
  "/events/codeefiesta.jpg",
  "/events/dsbda.jpg",
  "/events/engineersday.jpg",
  "/events/equinox.jpg",
  "/events/experttalkfuture.jpg",
  "/events/experttalkgate.jpg",
  "/events/halktalk.jpg",
  "/events/resession.jpg",
  "/events/teachersday.jpg",
  // "/events/img1.jpg",
  // "/events/img2.jpg",
  // "/events/img3.jpg",
  // "/events/img4.jpg",
  // "/events/img5.jpg",
  // "/events/img6.jpg",
  // "/events/img7.jpg",
  // "/events/img8.jpg",
  // "/events/img9.jpg",
  // "/events/img10.jpg",
  // "/events/img11.jpg",
  // "/events/img12.jpg",
  // "/events/img13.jpg",
  // "/events/img14.jpg",
  // "/events/img15.jpg",
  // "/events/img16.jpg",
];

const eventPhotos = [
  { id: "codeefiesta", width: 1554, height: 1493 },
  { id: "dsa", width: 977, height: 977 },
  { id: "dsbda", width: 782, height: 782 },
  { id: "engineersday", width: 820, height: 820 },
  { id: "equinox", width: 727, height: 727 },
  { id: "experttalkfuture", width: 807, height: 807 },
  { id: "experttalkgate", width: 750, height: 750 },
  { id: "halktalk", width: 1005, height: 1005 },
  { id: "resession", width: 586, height: 586 },
  // {id:"img1",width:700,height:700},
  // {id:"img2",width:977,height:977},
  // {id:"img3",width:782,height:782},
  // {id:"img4",width:820,height:820},
  // {id:"img5",width:727,height:727},
  // {id:"img6",width:807,height:807},
  // {id:"img7",width:750,height:750},
  // {id:"img8",width:1005,height:1005},
  // {id:"img9",width:586,height:586},
  // {id:"img10",width:1554,height:1493},
  // {id:"img11",width:977,height:977},
  // {id:"img12",width:820,height:820},
  // {id:"img13",width:727,height:727},
  // {id:"img14",width:782,height:782},
  // {id:"img15",width:750,height:750},
  // {id:"img16",width:1005,height:1005},
];
const photos = eventPhotos.map((photo) => {
  const src = `/events/${photo.id}.jpg`;
  const width = photo.width;
  const height = photo.height;

  return {
    src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const ratio = width / height;
      const newWidth = breakpoint;
      const newHeight = Math.round(newWidth / ratio);
      return { src: src, width: newWidth, height: newHeight };
    }),
  };
});

// const photos = imageUrls.map((imageUrl) => {
//   return {
//     src: imageUrl,
//     width: 1080, // You can set the width to a default value or adjust as needed
//     height: 720, // You can set the height to a default value or adjust as needed
//     srcSet: breakpoints.map((breakpoint) => {
//       const height = Math.round((720 / 1080) * breakpoint);
//       return {
//         src: imageUrl.replace(".jpg", `-${breakpoint}x${height}.jpg`),
//         width: breakpoint,
//         height,
//       };
//     }),
//   };
// });

// const photos = unsplashPhotos.map((photo) => {
//   const width = breakpoints[0];
//   const height = (photo.height / photo.width) * width;

//   return {
//     src: unsplashLink(photo.id, width, height),
//     width,
//     height,
//     srcSet: breakpoints.map((breakpoint) => {
//       const height = Math.round((photo.height / photo.width) * breakpoint);
//       return {
//         src: unsplashLink(photo.id, breakpoint, height),
//         width: breakpoint,
//         height,
//       };
//     }),
//   };
// });
export default photos;
