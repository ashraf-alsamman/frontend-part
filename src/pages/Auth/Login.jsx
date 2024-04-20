import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, message, Checkbox, Spin } from "antd";
import AuthSidebar from "./AuthSidebar";
import FloatInput from "../../components/FloatLabel/index";
import { login } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const loading = useSelector((state) => state.auth.loading);

  const isAuthenticatedState = useSelector(
    (state) => state.auth.token !== null,
  );
  const isAuthenticatedStorage = localStorage.getItem("token") !== null;

  useEffect(() => {
    // If the token does not exist in either state or storage, redirect to login
    debugger
    if (isAuthenticatedState || isAuthenticatedStorage) {
      debugger
      navigate("/");
    }
  }, [isAuthenticatedState, isAuthenticatedStorage]);

  const onFinish = async (values) => {
    try {
      await dispatch(login({ ...values, rememberMe: isChecked }));
      navigate("/");
    } catch (error) {
      console.error(t("Error during login:"), error);
      message.error(t("Error during login."));
    }
  };

  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.forEach((data) => {
      message.error(data.errors[0]);
    });
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Row justify="center">
      <Col span={12} xl={12} md={12} xs={0}>
        <AuthSidebar />
      </Col>

      <Col span={12} xl={12} md={12} xs={24}>
        {loading && (
          <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <Col>
              <Spin size="large" style={{ color: "#49b9b3" }} />
            </Col>
          </Row>
        )}{" "}
        <Form
          size="large"
          name="user_login"
          className="login-form"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={{ padding: "40px 50px" }}>
            <div style={{ backgroundColor: "transparent" }}>
              <p
                style={{
                  margin: "0",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "#012a2f",
                }}
              >
                {t("Sign in to your account")}
              </p>
              <p
                style={{
                  marginTop: "4px",
                  fontWeight: "400",
                  fontSize: ".714rem",
                  color: "#717a7b",
                  width: "60%",
                }}
              >
                {t(
                  "Sign in now to manage your events, access your event permits and measure your performance",
                )}
              </p>
            </div>
            <br />
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
              hasFeedback
            >
              <FloatInput label={"email"} placeholder={"Email"} name="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              hasFeedback
            >
              <FloatInput
                type="password"
                label="Password"
                placeholder={"Password"}
                name="password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
                {t("Remember me")}
              </Checkbox>
            </Form.Item>

            <br />
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {t("Sign In")}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
