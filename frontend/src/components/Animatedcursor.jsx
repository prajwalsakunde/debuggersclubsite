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
      mixBlendMode: 'exclusion'
    },
    innerStyle: {
      backgroundColor: 'var(--cursor-color)',
      mixBlendMode: 'exclusion'
    }
  });

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setCursorProps({
          color: "255,255,255",
          innerSize: 5,
          outerSize: 12,
          innerScale: 2,
          outerScale: 3,
          outerAlpha: 2,
          hasBlendMode: true,
          outerStyle: {
            mixBlendMode: 'exclusion'
          },
          innerStyle: {
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }
        });
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        setCursorProps({
          color: "255,255,255",
          innerSize: 7,
          outerSize: 25,
          innerScale: 3,
          outerScale: 4,
          outerAlpha: 3,
          hasBlendMode: true,
          outerStyle: {
            mixBlendMode: 'exclusion'
          },
          innerStyle: {
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }
        });
      } else {
        // Fallback to medium screen props for larger screens
        setCursorProps({
          color: "255,255,255",
          innerSize: 7,
          outerSize: 25,
          innerScale: 3,
          outerScale: 4,
          outerAlpha: 3,
          hasBlendMode: true,
          outerStyle: {
            mixBlendMode: 'exclusion'
          },
          innerStyle: {
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }
        });
      }
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
