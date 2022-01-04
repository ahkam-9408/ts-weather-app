import React from "react";

function RightSubComponent({ data, label }) {
  return (
    <div className="right-sub">
      {label === "High" || label === "Low" ? (
        <div>{data}&deg;</div>
      ) : (
        <div>{data}</div>
      )}
      <div className="right-sub-label">{label}</div>
    </div>
  );
}

export default RightSubComponent;
