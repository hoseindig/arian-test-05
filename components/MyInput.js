import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const BeautifulTextbox = ({
  value = "",
  name = "",
  type = "text",
  label = "",
  getChange,
  isDisabled = false,
}) => {
  const [inputValue, setValue] = useState(value);
  const changeHandle = (e) => {
    console.log(e);
    setValue(e);
    getChange(e);
  };
  return (
    <div className="flex items-center justify-center">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder="Password"
          className="border border-gray-300 rounded-md py-2 px-4 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => changeHandle(e.target.value)}
        />
      </Form.Group>
      {/* <div className="relative">
        <Form.Label>Password</Form.Label>
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={name ? name : "Enter text..."}
          value={value}
        />
      </div> */}
    </div>
  );
};

export default BeautifulTextbox;
