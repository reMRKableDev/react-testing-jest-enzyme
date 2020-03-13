import React from "react";
import isRetrievingList from "../isRetrievingList";

const fakeStatus = "initial";

test("isReceivingError returns true", () => {
  expect(isRetrievingList(fakeStatus)).toBeTruthy();
});

test("isReceivingError returns a valid value", () => {
  expect(isRetrievingList(fakeStatus)).toStrictEqual(
    <h2>Retrieving list from API</h2>
  );
});
