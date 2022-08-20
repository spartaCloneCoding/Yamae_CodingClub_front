import React from "react";

const Line = ({ text }) => {
  return (
    <div
      style={{
        fillOpacity: "0.3",
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "100px 0 20px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 20px" }}>{text}</span>
    </div>
  );
};

export default Line;
