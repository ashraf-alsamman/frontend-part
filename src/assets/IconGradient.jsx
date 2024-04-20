import React from "react";

export default function IconGradient() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="0px"
      height="0px"
      style={{ position: "absolute", top: "-900px" }}
    >
      <linearGradient id="MyGradient" x1="0%" y1="90%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1355f" />
        <stop offset="100%" stopColor="#49b9b3" />
      </linearGradient>
      <linearGradient id="reverseGradient" x1="0%" y1="90%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#49b9b3" />
        <stop offset="100%" stopColor="#d1355f" />
      </linearGradient>
      <linearGradient
        id="paint0_linear"
        x1="39.9297"
        y1="-45.125"
        x2="6.56454"
        y2="-43.4978"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D84E6A" />
        <stop offset="1" stopColor="#49B9B3" />
      </linearGradient>
      <linearGradient id="verticalGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#d1355f" />
        <stop offset="100%" stopColor="#49b9b3" />
      </linearGradient>
    </svg>
  );
}
