import React from "react";
import { Typography, Image } from "antd";
import { FALLBACK_IMG, SPONGEBOB_MEME } from "../Images";

const { Title, Text } = Typography;
export default function Home() {
  const flex = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const renderImg = () => {
    return (
      <Image
        style={{
         
          maxWidth: "100%",
          height: "auto",
        }}
        src={SPONGEBOB_MEME}
        fallback={FALLBACK_IMG}
      />
    );
  };

  return (
    <div style={flex}>
      <div>
        <Title>Welcome To Weekly-Workout-Planner</Title>
        <Title type="secondary" level={2}>
          Do You Even Lift Bro?!{" "}
        </Title>

        <Text>
          Sup, bro? Lifting the heavy weights huh? Good for you. What's that?
          Are you still using pen and paper to plan your workouts brah?
          <br />
          Well, you are in luck because the WWP(WeeklyWorkoutPlanner) is here!
          Now, ditch that old book and go to board tab!
        </Text>
      </div>

      <div>{renderImg()}</div>
    </div>
  );
}
