import React from "react";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, FireOutlined } from "@ant-design/icons";

export default function EditWorkoutForm({
  workoutName,
  setEditWorkoutFormState,
  editWorkoutFormState
}) {
  const handleChange = (e) => {
    setEditWorkoutFormState(e.target.value);
  };
  return (
    <div>
      <Input
        type="text"
        id={workoutName}
        name="workoutName"
        value={editWorkoutFormState}
        onChange={(e) => handleChange(e)}
        placeholder="Edit workout name"
        prefix={<FireOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Change workout name">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
    </div>
  );
}
