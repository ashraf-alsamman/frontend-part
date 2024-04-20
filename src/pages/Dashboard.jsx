import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Button } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Breadcrumb from "../components/Breadcrumb/index";
import DashboardHeaderTitle from "../components/DashboardHeaderTitle";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const breadcrumbItems = [
    {
      text: t("Dashboard"),
    },
  ];

  return (
    <div className="example">
      <Breadcrumb items={breadcrumbItems} />
      <br />
      <br />

      <Row gutter={24} justify="space-between" style={{ margin: "0" }}>
        <Col span={12}>
          <Row gutter={12}>
            <Col span={15}>
              <DashboardHeaderTitle
                title={"Hello User you are logged as"}
                subtitle={"username"}
              />
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
