import React from "react";
import { Col, Row } from "antd";
import Logo from "../../assets/logo.png";

const contentInnerStyle = {
  textAlign: "center",
  color: "white",
  padding: "20px 0",
  position: "absolute",
  bottom: "45%",
  width: "100%",
  fontSize: "30px",
};

const footerStyle = {
  textAlign: "center",
  color: "white",
  padding: "20px 0",
  position: "absolute",
  bottom: "5px",
  width: "100%",
  fontSize: "9px",
};

function AuthSidebar() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="admin-dashboard-sidebar-auth">
      <div style={{ padding: "50px", borderRadius: "20px", opacity: "0.7" }}>
        <Row justify="center" align="middle" style={{ height: "80vh" }}>
          <Col>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <div style={contentInnerStyle}>
          <div style={{ textAlign: "center" }}></div>
        </div>
      </Row>

      <Row>
        <div style={footerStyle}>Funanga All rights reserved {currentYear}</div>
      </Row>
    </div>
  );
}

export default AuthSidebar;
