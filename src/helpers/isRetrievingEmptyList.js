import React from "react";

const isRetrievingEmptyList = (status, usersList) =>
  status === "done" &&
  usersList.length === 0 && <h2>Sorry, didn't get any data back</h2>;

export default isRetrievingEmptyList;
