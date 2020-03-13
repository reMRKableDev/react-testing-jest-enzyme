import React from "react";

const isReceivingError = status =>
  status === "error" && (
    <h2>Sorry, we are experiencing technical difficulties at the moment!</h2>
  );

export default isReceivingError;
