import React from "react";
import { Typography, Space, Image } from "antd";
import { FALLBACK_IMG, SPONGEBOB_ARM } from "../Images";

const { Title, Text } = Typography;

export default function About() {
  const flex = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const renderImg = () => {
    return (
      <img
        style={{
          border: "5px solid black",
          maxWidth: "100%",
          height: "auto",
          
        }}
        src={SPONGEBOB_ARM}
        alt="Spongebob"
        fallback={FALLBACK_IMG}
      />
    );
  };
  return (
    <div style={flex}>
      <div>
        <Title>About Weekly-Workout-Planner</Title>
        <Text>
          Sup' Bro! You want to learn more about this website! Cool! <br />
          <br />
          This website is designed by ThiccBois to help plan your workouts bruh;
          You can add the workouts you want to do
          <br /> and you can add the section names too. Sick, right ?! Anyway,
          the dudes who designed this website care about ease of use,
          <br /> so you can easily use it (duh!?), without training. Keep on
          rockin' that tank top, No pain, no gain etc. !
        </Text> <br/>
        <Text>ThiccBois: 
        <a href="https://github.com/bertacsevercan" >Bertaç Severcan</a> &
        <a href="https://github.com/ihab-sensei" >Ihab Severcan</a>
        </Text>
      </div>

      <div>{renderImg()}</div>
    </div>
  );
}
