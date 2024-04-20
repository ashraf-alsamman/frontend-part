import React from "react";
import { Divider, Button, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidepanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="dashboard__right-panel">
      <div className="dashboard__right-panel-content">
        <Row gutter={16} style={{ height: "30px" }}>
          <Col>
            <Button
              type="primary"
              onClick={handleLogout}
              style={{ height: "31px" }}
            >
              <LogoutOutlined />
            </Button>{" "}
          </Col>
        </Row>

        <Divider style={{ backgroundColor: "#FFFFFF", opacity: "0.2" }} />
      </div>
    </div>
  );
};

export default Sidepanel;
