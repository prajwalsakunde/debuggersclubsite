import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  const [cursorProps, setCursorProps] = useState({
    color: "255,255,255",
    innerSize: 5,
    outerSize: 12,
    innerScale: 2,
    outerScale: 3,
    outerAlpha: 2,
    hasBlendMode: true,
    outerStyle: {
      mixBlendMode: "exclusion",
    },
    innerStyle: {
      backgroundColor: "var(--cursor-color)",
      mixBlendMode: "exclusion",
    },
  });

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let newProps = {};
      if (screenWidth < 640) {
        newProps = {
          innerSize: 5,
          outerSize: 12,
          innerScale: 2,
          outerScale: 3,
        };
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        newProps = {
          innerSize: 7,
          outerSize: 25,
          innerScale: 3,
          outerScale: 4,
        };
      } else {
        // Fallback to medium screen props for larger screens
        newProps = {
          innerSize: 7,
          outerSize: 25,
          innerScale: 3,
          outerScale: 4,
        };
      }
      setCursorProps((prevProps) => ({ ...prevProps, ...newProps }));
    }

    // Call handleResize initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <AnimatedCursor {...cursorProps} />;
}

export default AnimCursor;
