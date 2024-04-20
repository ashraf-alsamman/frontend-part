import React, { useState, useEffect } from "react";
import { Input, InputNumber } from "antd";
import { Form } from "antd";
import { useFormContext } from "../../Utils/FormContext";
import { useTranslation } from "react-i18next";

const FloatInput = (props) => {
  const [focus, setFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); // State to track if input field is empty
  const {
    name,
    rules,
    label,
    value,
    type,
    onChange,
    placeholder,
    required,
    min,
    max,
    inputType,
    style,
    old,
    maxLength,
    pattern,
  } = props;
  const { form } = useFormContext();
  const { t } = useTranslation();

  const handleTextChange = (e) => {
    const newValue = e.target.value;
    if (props.onChange) {
      // Check if props.onChange exists
      props.onChange(newValue);
    }
    setFocus(true);
    if (onChange) {
      onChange(newValue);
    }
    // Update isEmpty state based on whether the input field is empty
    setIsEmpty(newValue.trim() === "");
  };

  return (
    <div className="float-label" onFocus={() => setFocus(true)}>
      <Form.Item name={name} rules={rules} initialValue={old} hasFeedback>
        {inputType === "number" ? (
          <InputNumber
            initialValue={old}
            maxLength={maxLength}
            pattern={pattern}
            style={style}
            min={min}
            max={max}
            value={value}
            type="number"
          />
        ) : (
          <Input
            initialValue={old}
            type={type}
            style={style}
            value={value}
            onChange={handleTextChange}
            maxLength={maxLength}
            pattern={pattern}
          />
        )}
      </Form.Item>

      <label
        className={focus || value ? "label as-label" : "label as-placeholder"}
      >
        {focus || value ? t(label) : t(placeholder)}{" "}
        {required ? <span className="text-danger">*</span> : null}
      </label>
    </div>
  );
};

export default FloatInput;
