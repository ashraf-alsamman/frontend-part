import React from "react";
import { Card } from "antd";

const DetailsCard = ({ title, subtitle }) => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <p
        style={{
          margin: "0",
          fontWeight: "600",
          fontSize: "13px",
          color: "#012a2f",
        }}
      >
        {title}
      </p>
      <p
        style={{
          marginTop: "4px",
          fontWeight: "400",
          fontSize: ".714rem",
          color: "#717a7b",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default DetailsCard;
