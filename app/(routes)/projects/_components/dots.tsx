import React from 'react';

const BackgroundSVG = () => (
  <svg
    className=" absolute top-0 left-0 w-[100%] min-h-[100%]  -z-10 bg-[#13111C]"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    
    height="100%"
  >
    <defs>
      <pattern id="pattern-1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="0.5" fill="hsl(246,  7%, 45%)" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
  </svg>
);

export default BackgroundSVG;
