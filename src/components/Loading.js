import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
