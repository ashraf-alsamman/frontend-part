import React from "react";

const MapIcon = ({ color }) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill={color}
      viewBox="0 0 24 24"
      fillRule={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 19.72l7.108 2.37 6.969-3.982L22 20.477V4.323l-6.077-2.43-7.03 4.017L2 3.612v16.109zm12-2.729l-4 2.286V7.58l4-2.285V16.99zm2-1.068l4 1.6V5.677l-3.923-1.57-.077.045v11.77zM4 18.279l4 1.334V7.72L4 6.387V18.28z"
        fill={color}
      ></path>
    </svg>
  );
};

export default MapIcon;
