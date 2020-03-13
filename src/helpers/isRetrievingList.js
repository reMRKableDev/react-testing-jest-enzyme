import React from "react";

const isRetrievingList = status =>
  status === "initial" && <h2>Retrieving list from API</h2>;

export default isRetrievingList;
