import React from "react";
import { Row, Col } from "antd";

const DashboardHeaderTitle = ({ title, titleNote, subtitle }) => {
  return (
    <>
      <Row>
        <Col className="section-title">{title}</Col>
        <Col className="small-text">{titleNote}</Col>
      </Row>
      <Row className="section-subtitle">{subtitle}</Row>
    </>
  );
};

export default DashboardHeaderTitle;
