import React, { useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "../components/WorkoutForm";
import db from "../firebaseConfig";
import { Button, Modal, Tooltip, Typography, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as firebase from "firebase";
import "./style.css";

const { Title } = Typography;
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default function Day({ name, filter, view, sort }) {
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useState({ visible: false });
  const [day, setDay] = useState([]);
  const [workoutFormState, setWorkoutFormState] = useState("");

  const showModal = () => {
    setModalState({
      visible: true
    });
  };

  const handleOk = () => {
    setModalState({
      visible: false
    });
    setWorkoutFormState("");
  };

  const handleCancel = () => {
    setModalState({
      visible: false
    });
  };

  const addWorkout = () => {
    db.collection(name).add({
      workoutName: workoutFormState,
      createdAt: timestamp(),
      isComplete: false,
      completeSort: 0
    });

    handleOk();
  };

  useEffect(() => {
    const unsubscribe = db
      .collection(name)
      .orderBy(sort.sortType, sort.sortOrder)
      //.orderBy("completeSort", "desc")
      .onSnapshot((snapshot) => {
        const dataArr = [];
        snapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), docId: doc.id });
        });
        if (filter === "incomplete") {
          const filteredArr = dataArr.filter(
            (data) => data.isComplete === false
          );
          setDay(filteredArr);
        } else if (filter === "completed") {
          const filteredArr = dataArr.filter(
            (data) => data.isComplete === true
          );
          setDay(filteredArr);
        } else {
          setDay(dataArr);
        }
        setLoading(false);
      });

    return unsubscribe;
  }, [filter, sort]);

  return (
    <div className="weekDay">
      {loading ? (
        <div className="spin">
          <Spin />{" "}
        </div>
      ) : null}
      {view === "cardView" ? (
        <Tooltip title="Add">
          <Button
            onClick={showModal}
            type="primary"
            icon={<PlusOutlined />}
            size="small"
          >
            Workout
          </Button>
        </Tooltip>
      ) : null}

      {day.map((workout) => (
        <Workout
          view={view}
          key={workout.docId}
          name={name}
          workout={workout}
        />
      ))}

      <Modal
        title="Add a new workout"
        visible={modalState.visible}
        onOk={addWorkout}
        onCancel={handleCancel}
      >
        <WorkoutForm
          workoutFormState={workoutFormState}
          setWorkoutFormState={setWorkoutFormState}
          name={name}
        />
      </Modal>
      {day.length === 0 && !loading ? (
        <Title mark level={4}>
          No workouts for this day!
        </Title>
      ) : null}
    </div>
  );
}
