// import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
<AnimatedCursor
          color="255,255,255"
          innerSize={7}
          outerSize={30}
          innerScale={2}
          outerScale={3}
          outerAlpha={2}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }}
/>
  );
}

export default AnimCursor;
