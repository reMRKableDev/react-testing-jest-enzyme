import React from "react";
import isReceivingError from "../isReceivingError";

const fakeStatus = "error";

test("isReceivingError returns true", () => {
  expect(isReceivingError(fakeStatus)).toBeTruthy();
});

test("isReceivingError returns a valid value", () => {
  expect(isReceivingError(fakeStatus)).toStrictEqual(
    <h2>Sorry, we are experiencing technical difficulties at the moment!</h2>
  );
});
