import React from "react";
import { Col, Avatar, Tooltip } from "antd";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";

import DashboardIcon from "../../assets/icons/DashboardIcon";

import NewsPaperIcon from "../../assets/icons/NewsPaperIcon";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    isExact: "true",
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: <NewsPaperIcon />,
  },
];

function AdminDashboardSidebar() {
  // const { i18n } = useTranslation();
  // const isEnglish = i18n.language === 'en-US';
  const location = useLocation();

  return (
    <Col className="admin-dashboard-sidebar">
      <div style={{ margin: "30px 0" }}>
        <div className="background-logo">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "50px", marginLeft: "10px" }}
          />
        </div>
        <Link to="/"></Link>
      </div>
      <div className="dashboard-navbar">
        <Link to="">
          <Avatar
            className="shadow avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Link>
        {menu.map((menuItem, index) => (
          <Tooltip placement="right" title={menuItem.title} key={index}>
            <NavLink
              to={menuItem.path}
              exact={menuItem.isExact}
              className={
                location.pathname === menuItem.path
                  ? "sidebar_active"
                  : "custom-icon"
              }
            >
              {React.cloneElement(menuItem.icon, {
                color:
                  location.pathname === menuItem.path ? "#ffffff" : "#0B3237",
              })}
            </NavLink>
          </Tooltip>
        ))}
      </div>

      <div className="dashboard-footer"></div>
    </Col>
  );
}

export default AdminDashboardSidebar;
