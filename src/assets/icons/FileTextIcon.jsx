import React from "react";

const FileTextIcon = ({ color }) => {
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
        d="M5 1h10.414L21 6.586V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3a2 2 0 012-2zm8 2H5v18h14V9h-4a2 2 0 01-2-2V3zm2 .414V7h3.586L15 3.414zM8 17v-2h6v2H8zm0-6v2h8v-2H8z"
        fill={color}
      ></path>
    </svg>
  );
};

export default FileTextIcon;
