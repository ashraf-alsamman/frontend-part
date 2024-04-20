import React, { useState } from "react";
import { Form, Button, Row, Col, message, Modal } from "antd";
import { TextArea } from "../components/Form/TextArea";
import MyForm from "../components/Form/MyForm";
import { displayErrors, getUserRole } from "../Utils/helpers";
import { useDispatch } from "react-redux";
import InfoBlock from "../components/InfoBlock";

const PermitsAdminApproval = ({ data, sendToAdmin, children }) => {
  const role = getUserRole();
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const [myData, setMyData] = useState(data.enFlgPrmtStatus);
  debugger;
  const [requestStatus, setRequestStatus] = useState(2); // Default to approve
  const dispatch = useDispatch();

  const handleFeedbackButtonClick = () => {
    setShowFeedbackForm(true);
  };

  const handleCancelButtonClick = () => {
    setShowFeedbackForm(false);
  };

  const handleUpdateStatus = (status) => {
    setRequestStatus(status);
    setConfirmationVisible(true);
  };

  const handleConfirmAction = () => {
    const values = { requestStatus };
    dispatch(sendToAdmin(values))
      .then((data) => {
        if (data?.error | data?.errors) {
          displayErrors(data, message);
        } else {
          setMyData(requestStatus);
          if (requestStatus == 4) {
            message.success("The request has been rejected");
          }
          if (requestStatus == 2) {
            message.success("The request has been approved");
          }
        }
        setConfirmationVisible(false);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
        setConfirmationVisible(false);
      });
  };

  const handleCancelAction = () => {
    setConfirmationVisible(false);
  };

  const onFinish = (values) => {
    if (values.comment) {
      values.requestStatus = "3";
    }
    setMyData(3);
    dispatch(sendToAdmin(values))
      .then((data) => {
        if (data?.error || data?.errors) {
          displayErrors(data, message);
        } else {
          setShowFeedbackForm(false);
          message.success("Feedback has been sent");
        }
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.forEach((data) => {
      message.error(data.errors[0]);
    });
  };

  return (
    <div className="parent-component">
      {children}
      {myData == 2 && (
        <InfoBlock title="Note" message="This request has been approved." />
      )}
      {myData == 3 && (
        <InfoBlock
          title="Note"
          message="This feedback for this request has been sent."
        />
      )}
      {myData == 4 && (
        <InfoBlock
          type="warning"
          title="Note"
          message="This request has been rejected."
        />
      )}

      {role === "Admin" && (
        <MyForm onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <h2>Permits Admin Approval</h2>
          {JSON.stringify(
            "Show the options after submitting for testing purposes",
          )}
          <div className="children-container"></div>
          {showFeedbackForm ? (
            <Form.Item>
              <Row gutter={6}>
                <Col span={24}>
                  <TextArea
                    name="comment"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Feedback!",
                      },
                    ]}
                    label="Feedback"
                    placeholder="Feedback"
                  />
                </Col>
                <Col>
                  <Button htmlType="submit">Submit Feedback</Button>
                </Col>
                <Col>
                  <Button type="default" onClick={handleCancelButtonClick}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          ) : (
            <Row gutter={8}>
              <Col>
                <Button
                  type="secondary"
                  className="deleteButton"
                  onClick={() => handleUpdateStatus("4")}
                >
                  Reject
                </Button>
              </Col>
              <Col>
                <Button type="primary" onClick={handleFeedbackButtonClick}>
                  Send Feedback
                </Button>
              </Col>
              <Col>
                <Button type="primary" onClick={() => handleUpdateStatus("2")}>
                  Approve
                </Button>
              </Col>
            </Row>
          )}
        </MyForm>
      )}
      <Modal
        title={
          requestStatus === "2" ? "Approve Confirmation" : "Reject Confirmation"
        }
        visible={confirmationVisible}
        onCancel={handleCancelAction}
      >
        <p>
          {requestStatus === "2"
            ? "Are you sure you want to approve?"
            : "Are you sure you want to reject?"}
        </p>
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button style={{ marginRight: "10px" }} onClick={handleCancelAction}>
            Cancel
          </Button>
          <Button
            type="primary"
            className={requestStatus === "2" ? null : "deleteButton"}
            onClick={handleConfirmAction}
          >
            {requestStatus === "2" ? "Confirm" : "Reject"}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PermitsAdminApproval;
