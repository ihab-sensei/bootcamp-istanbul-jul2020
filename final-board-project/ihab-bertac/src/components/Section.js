import React, { useState } from "react";
import {
  Menu,
  Dropdown,
  Typography,
  Collapse,
  Button,
  Tooltip,
  Modal,
} from "antd";
import db from "../firebaseConfig";
import { DeleteOutlined, MoreOutlined, EditOutlined } from "@ant-design/icons";
import EditSectionForm from "./EditSectionForm";
const { Text } = Typography;
const { Panel } = Collapse;

export default function Section({ sections, name, workout, view }) {
  const [modalState, setModalState] = useState({ visible: false });
  const [editSectionFormState, setEditSectionFormState] = useState({
    sectionName: sections.sectionName,
    sectionDescription: sections.sectionDescription,
  });

  const deleteSection = () => {
    console.log(sections);
    db.collection(name)
      .doc(workout.docId)
      .collection("Sections")
      .doc(sections.docId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((err) => {
        console.error("Error removing document: ", err);
      });
  };
  const editSection = () => {
    db.collection(name)
      .doc(workout.docId)
      .collection("Sections")
      .doc(sections.docId)
      .update({
        sectionName: editSectionFormState.sectionName,
        sectionDescription: editSectionFormState.sectionDescription,
      });
    handleOk();
  };
  const deleteExtraButton = () => {
    return (
      <Tooltip placement="right" title="Delete">
        <Button
          danger={true}
          onClick={(e) => {
            deleteSection();
            e.stopPropagation();
          }}
          type="text"
          shape="circle"
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    );
  };
  const showModal = () => {
    setModalState({
      visible: true,
    });
  };

  const handleOk = () => {
    setModalState({
      visible: false,
    });
  };

  const handleCancel = () => {
    setModalState({
      visible: false,
    });
  };

  const editExtraButton = () => {
    return (
      <Tooltip placement="right" title="Edit">
        <Button
          onClick={(e) => {
            showModal();
            e.stopPropagation();
          }}
          type="text"
          shape="circle"
          icon={<EditOutlined />}
        ></Button>
      </Tooltip>
    );
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">{deleteExtraButton()}</Menu.Item>
      <Menu.Item key="2">{editExtraButton()}</Menu.Item>
    </Menu>
  );

  const menuExtraButton = () => {
    return (
      <Dropdown overlay={menu}>
        <MoreOutlined />
      </Dropdown>
    );
  };

  return (
    <>
      <Collapse>
        <Panel
          style={{ overflowWrap: "break-word", margin: " 5px 0" }}
          extra={view === "cardView" ? menuExtraButton() : null}
          header={sections.sectionName}
        >
          <Text>{sections.sectionDescription}</Text>
        </Panel>
      </Collapse>

      <Modal
        title="Edit the name of the section"
        visible={modalState.visible}
        onOk={editSection}
        onCancel={handleCancel}
      >
        <EditSectionForm
          sectionName={sections.sectionName}
          sectionDescription={sections.sectionDescription}
          setEditSectionFormState={setEditSectionFormState}
          editSectionFormState={editSectionFormState}
        />
      </Modal>
    </>
  );
}
