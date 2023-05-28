import React from "react";

const BeautifulTextbox = ({ value = "", name = "", isDisabled = false }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={name ? name : "Enter text..."}
          value={value}
        />
      </div>
    </div>
  );
};

export default BeautifulTextbox;
