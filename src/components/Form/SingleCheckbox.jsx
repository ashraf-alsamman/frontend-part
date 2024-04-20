import React, { useState } from "react";
import { Form, Checkbox } from "antd";
import Note from "../Note";
import { useFormContext } from "../../Utils/FormContext";

const SingleCheckbox = ({
  name,
  label,
  note,
  checked,
  old,
  onChange,
  span = 12,
  rules = [{ required: true, message: "Please choose!" }],
}) => {
  const { form } = useFormContext();
  const [checkedState, setCheckedState] = useState(old);
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setCheckedState(isChecked);
    form.setFieldsValue({
      [name]: isChecked,
    });
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <Form.Item name={name} initialValue={old} rules={rules} label={label}>
      <Checkbox onChange={handleCheckboxChange} checked={checkedState}>
        <Note text={note} />
      </Checkbox>
    </Form.Item>
  );
};

export default SingleCheckbox;
