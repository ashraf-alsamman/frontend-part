import React from "react";

const Contracts = ({ color }) => {
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
        d="M8.996 2c.752-.637 1.843-1 3.004-1 1.16 0 2.252.363 3.004 1H16a2 2 0 012 2h1a2 2 0 012 2v15a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1a2 2 0 012-2h.996zM16 7a2 2 0 001.732-1H19v15H5V6h1.268A2 2 0 008 7h8zm-8 9v-2h6v2H8zm0-6v2h8v-2H8zm1.858-6l.299-.345C10.485 3.277 11.189 3 12 3c.81 0 1.515.277 1.843.655l.3.345H16v1H8V4h1.858z"
        fill={color}
      ></path>{" "}
    </svg>
  );
};

export default Contracts;
