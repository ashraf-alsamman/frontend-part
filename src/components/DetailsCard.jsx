import React from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

const DetailsCard = ({ title, subtitle }) => {
  const { t } = useTranslation();
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
        {t(title)}
      </p>
      <p
        style={{
          marginTop: "4px",
          fontWeight: "400",
          fontSize: ".714rem",
          color: "#717a7b",
        }}
      >
        {t(subtitle)}
      </p>
    </div>
  );
};

export default DetailsCard;
