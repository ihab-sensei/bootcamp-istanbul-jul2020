import React from "react";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, FireOutlined } from "@ant-design/icons";

export default function WorkoutForm({
  workoutFormState,
  setWorkoutFormState,
  name
}) {
  const handleChange = (e) => {
    setWorkoutFormState(e.target.value);
    
  };
  return (
    <div>
      <Input
        type="text"
        id={name}
        name="workoutName"
        value={workoutFormState}
        onChange={(e) => handleChange(e)}
        placeholder="Enter workout name"
        prefix={<FireOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="e.g Leg Day...">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
    </div>
  );
}
