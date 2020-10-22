import React from "react";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, FireOutlined } from "@ant-design/icons";
const { TextArea } = Input;

export default function SectionForm({ sectionFormState, setSectionFormState }) {
  const handleChange = (e) => {
    setSectionFormState({
      ...sectionFormState,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div>
      <Input
        type="text"
        id="sectionName"
        name="sectionName"
        value={sectionFormState.sectionName}
        onChange={(e) => handleChange(e)}
        placeholder="Enter section name"
        prefix={<FireOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="e.g Warm Up...">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <TextArea
        placeholder="Add section description..."
        id="sectionDescription"
        name="sectionDescription"
        value={sectionFormState.sectionDescription}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
