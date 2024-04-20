import React from "react";
import Sidebar from "./components/sidebar";
import Sidepanel from "./components/Sidepanel/index";
import "./index.css";
import { Layout, Col, Card } from "antd";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./Utils/PrivateRoute";
import { Form } from "antd";
import { FormProvider } from "./Utils/FormContext.jsx";
import NoMatch from "./pages/NoMatch.jsx";

const { Sider } = Layout;

const App = () => {
  const [form] = Form.useForm();
  const sharedProps = { form };

  return (
    <FormProvider {...sharedProps}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DefaultLayout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </FormProvider>
  );
};

const DefaultLayout = () => {
  const [form] = Form.useForm();
  const sharedProps = { form };

  return (
    <Layout style={{ minHeight: "97vh" }}>
      <FormProvider {...sharedProps}>
        <Col xl={1} lg={1} md={1} sm={2} xs={3}>
          <Sider style={{ background: "transparent" }}>
            <Sidebar />
          </Sider>
        </Col>

        <Col className="content-col" xl={18} lg={18} md={18} sm={24} xs={24}>
          <Card
            className="scrollable-card"
            style={{
              background: "none",
              overflowY: "auto",
              maxHeight: "calc(100vh)",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<PrivateRoute component={Dashboard} />}
              />
            </Routes>
          </Card>
        </Col>

        <Col className="sidepanel-col" xl={5} lg={5} md={5} sm={24} xs={24}>
          <Sidepanel />
        </Col>
      </FormProvider>
    </Layout>
  );
};

export default App;
