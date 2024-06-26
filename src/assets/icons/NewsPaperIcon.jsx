import React from "react";

const NewsPaperIcon = ({ color }) => {
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
        d="M4 18V5h12v13c0 .35.06.687.17 1H5a1 1 0 01-1-1zm15 3H5a3 3 0 01-3-3V3h16v5h4v10a3 3 0 01-3 3zm-1-11h2v8a1 1 0 11-2 0v-8zm-8-3v4H6V7h4zm4 3V8h-3v2h3zm0 2v2H6v-2h8zm0 5v-2H6v2h8z"
        fill={color}
      ></path>
    </svg>
  );
};

export default NewsPaperIcon;
