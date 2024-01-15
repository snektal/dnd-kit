import React from "react";

const FileContents = ({ props }) => {
  return (
    <div
      style={{
        marginBottom: "8px",
        padding: "8px",
        border: "1px solid black",
      }}
    >
      <div type="text">{props}</div>
    </div>
  );
};

export default FileContents;
