import React from "react";
import isRetrievingEmptyList from "../isRetrievingEmptyList";

const fakeStatus = "done";
const fakeEmptyList = [];

test("isReceivingError returns true", () => {
  expect(isRetrievingEmptyList(fakeStatus, fakeEmptyList)).toBeTruthy();
});

test("isReceivingError returns a valid value", () => {
  expect(isRetrievingEmptyList(fakeStatus, fakeEmptyList)).toStrictEqual(
    <h2>Sorry, didn't get any data back</h2>
  );
});
