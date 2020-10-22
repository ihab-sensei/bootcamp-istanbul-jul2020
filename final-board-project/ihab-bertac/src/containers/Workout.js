import React, { useState } from "react";
import db from "../firebaseConfig";
import Sections from "./Sections";
import EditWorkoutForm from "../components/EditWorkoutForm";
import { Tooltip, Typography, Button, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleTwoTone
} from "@ant-design/icons";

const { Title } = Typography;
export default function Workout({ name, workout, view }) {
  const [modalState, setModalState] = useState({ visible: false });
  const [editWorkoutFormState, setEditWorkoutFormState] = useState(
    workout.workoutName
  );

  const deleteWorkout = async () => {
    const ref = db.collection(name).doc(workout.docId).collection("Sections");
    const res = await ref.get();
    const datas = res.docs.map((data) => data.id);
    datas.forEach((doc) => {
      ref.doc(doc).delete();
    });
    console.log(datas);
    db.collection(name)
      .doc(workout.docId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((err) => {
        console.error("Error removing document: ", err);
      });
  };

  const editWorkout = () => {
    db.collection(name)
      .doc(workout.docId)
      .update({ workoutName: editWorkoutFormState });

    handleOk();
  };
  const completeWorkout = () => {
    db.collection(name)
      .doc(workout.docId)
      .update({
        isComplete: !workout.isComplete,
        completeSort: !workout.isComplete ? 1 : 0
      });
  };
  const showModal = () => {
    setModalState({
      visible: true
    });
  };

  const handleOk = () => {
    setModalState({
      visible: false
    });
  };

  const handleCancel = () => {
    setModalState({
      visible: false
    });
  };

  return (
    <>
      <div
        style={{ padding: "7px", margin: "7px 0" }}
        className="workoutContainer"
      >
        <Title
          delete={workout.isComplete}
          style={{ display: "inline" }}
          level={5}
        >
          {workout.workoutName}
        </Title>
        {view === "cardView" ? (
          <>
            <Tooltip title="Edit">
              <Button
                onClick={showModal}
                type="text"
                shape="circle"
                icon={<EditOutlined />}
              ></Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger={true}
                onClick={deleteWorkout}
                type="text"
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Tooltip>
            <Tooltip title="Mark complete">
              <Button
                onClick={completeWorkout}
                type="text"
                shape="circle"
                icon={
                  <CheckCircleTwoTone
                    twoToneColor={workout.isComplete ? "#52c41a" : "#a8a8a8"}
                  />
                }
              />
            </Tooltip>
          </>
        ) : null}

        <Sections view={view} name={name} workout={workout} />
      </div>
      <Modal
        title="Edit the name of the workout"
        visible={modalState.visible}
        onOk={editWorkout}
        onCancel={handleCancel}
      >
        <EditWorkoutForm
          workoutName={workout.workoutName}
          setEditWorkoutFormState={setEditWorkoutFormState}
          editWorkoutFormState={editWorkoutFormState}
        />
      </Modal>
    </>
  );
}
