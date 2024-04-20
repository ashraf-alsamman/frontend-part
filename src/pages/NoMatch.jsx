import React, { useEffect, useState } from "react";
import { Typography, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const NoMatch = () => {
  const [redirect, setRedirect] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setRedirect(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div style={styles.container}>
      {redirect && navigate("/")}
      <Title level={2}>404 - Not Found</Title>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <p style={styles.message}>
        You will be redirected to the homepage in {countdown} seconds...
      </p>
      <Spin size="large" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  },
  message: {
    margin: "10px 0",
  },
};

export default NoMatch;
