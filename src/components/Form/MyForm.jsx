import { useEffect } from "react";

import { Form as AntdForm } from "antd";
import { useFormContext } from "../../Utils/FormContext";

const MyForm = ({
  name = "myform",
  initialValues,
  onFinish,
  onFinishFailed,
  children,
  resetForm,
  secondForm = false,
  formOutput,
}) => {
  const { form } = useFormContext();

  // const currentForm = secondForm ? form2 : form;

  useEffect(() => {
    if (resetForm) {
      form.resetFields();
    }
  }, [resetForm]);

  return (
    <AntdForm
      form={form}
      size="large"
      name={name}
      className="login-form"
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {children}
    </AntdForm>
  );
};

export default MyForm;
