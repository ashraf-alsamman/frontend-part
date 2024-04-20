import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const HomeIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={{ transform: "scaleX(-1)" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.889 10l6.001-6.001L17.891 10h-.001v10h-12V10h-.001zM3.89 11.999l-1.477 1.476L1 12.063l9.477-9.477c.78-.78 2.046-.78 2.826 0l9.477 9.477-1.413 1.414-1.477-1.477V20a2 2 0 01-2 2h-12a2 2 0 01-2-2v-8.001z"
      fill="#e12857"
    />
  </svg>
);

const CustomSeparatorRTL = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={{ transform: "scaleX(-1)" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.414 12l7.293 7.293-1.414 1.414L6.586 12l8.707-8.707 1.414 1.414L9.414 12z"
      fill="#54C4D2"
    />
  </svg>
);

const CustomSeparator = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className=""
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.414 12l7.293 7.293-1.414 1.414L6.586 12l8.707-8.707 1.414 1.414L9.414 12z"
      fill="#54C4D2"
    />
  </svg>
);

const MyBreadcrumb = ({ items }) => {
  const { t } = useTranslation();
  return (
    <Row>
      <Col style={{ margin: "3px 5px 3px 5px" }}>
        <HomeIcon />
      </Col>
      <Col>
        <Breadcrumb separator={<CustomSeparatorRTL />}>
          {items.map((item, index) => (
            <Breadcrumb.Item key={index}>
              {item.href ? (
                <Link
                  to={item.href}
                  style={{
                    color: "#54C4D2",
                    marginLeft: "0px",
                    fontStyle: "italic",
                    fontSize: "12px",
                  }}
                >
                  {t(item.text)}
                </Link>
              ) : (
                <span
                  style={{
                    color: "#949FA0",
                    marginLeft: "0px",
                    fontStyle: "italic",
                    fontSize: "12px",
                  }}
                >
                  {t(item.text)}
                </span>
              )}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default MyBreadcrumb;
