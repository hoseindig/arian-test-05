import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyInput from "./MyInput";

const Popup = ({
  header = "",
  showModal,
  modalClose,
  onSaveData,
  CurentItem = { params: {} },
}) => {
  const [show, setShow] = useState(showModal);
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(CurentItem))
  );

  const handleClose = () => {
    setShow(false);
    modalClose();
    console.log("handleClose");
  };
  const handleSave = () => {
    setShow(false);
    modalClose();
    onSaveData(formData);
    console.log("handleClose");
  };
  const getDataInput = (value, paramerName) => {
    // console.log("getDataInput", value, paramerName);
    let pformData = formData;
    if (paramerName === "name") pformData[paramerName] = value;
    else pformData.params[paramerName] = value;
    console.log("pformData", pformData);
    setFormData(pformData);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you're reading this text in a modal! */}
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <MyInput
              label="name"
              value={CurentItem.name}
              getChange={(e) => getDataInput(e, "name")}
            />
            <MyInput
              label="cylinders"
              type="number"
              getChange={(e) => getDataInput(e, "cylinders")}
              value={CurentItem.params.cylinders}
            />
            <MyInput
              label="volume"
              type="number"
              value={CurentItem.params.volume}
              getChange={(e) => getDataInput(e, "volume")}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
