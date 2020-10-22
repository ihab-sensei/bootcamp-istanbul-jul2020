import React from "react";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, FireOutlined } from "@ant-design/icons";

function EditSectionForm({
  sectionName,
  sectionDescription,
  setEditSectionFormState,
  editSectionFormState
}) {
  const handleChange = (e) => {
    setEditSectionFormState({
      ...editSectionFormState,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <Input
        type="text"
        id={sectionName}
        name="sectionName"
        value={editSectionFormState.sectionName}
        onChange={(e) => handleChange(e)}
        placeholder="Edit section name"
        prefix={<FireOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="e.g Warm Up...">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <Input.TextArea // bug on render
        placeholder="Change section description..."
        id={sectionDescription}
        name="sectionDescription"
        value={editSectionFormState.sectionDescription}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default EditSectionForm;
