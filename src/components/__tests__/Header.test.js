import React from "react";
import Header from "../Header";
import { shallow, render, mount } from "enzyme";

/* GLOBAL VARIABLES, MATCHERS & FUNCTIONS */
const HeaderComponent = <Header />;
const HeaderComponentWithNameProp = <Header name="Malcolm" />;

const expectMatchSnapshot = wrapper => expect(wrapper).toMatchSnapshot();
const expectToEqual = (receivedValue, expectedValue) =>
  expect(receivedValue).toEqual(expectedValue);
const findElementValue = wrapper => wrapper.find("h1").text();

/* TESTS */
test("shallow rendering component correctly", () => {
  const wrapper = shallow(HeaderComponent);
  expectMatchSnapshot(wrapper);
});

test("shallow rendering correctly component with name", () => {
  const wrapper = shallow(HeaderComponentWithNameProp);
  expectMatchSnapshot(wrapper);
});

test("rendering component", () => {
  const wrapper = render(HeaderComponent);
  expectMatchSnapshot(wrapper);
});

test("rendering component with name", () => {
  const wrapper = render(HeaderComponentWithNameProp);
  expectMatchSnapshot(wrapper);
});

test("mounting component", () => {
  const wrapper = mount(HeaderComponent);
  const receivedTextValue = findElementValue(wrapper);
  expectToEqual(receivedTextValue, "Hello stranger!");
});

test("mounting component with name", () => {
  const wrapper = mount(HeaderComponentWithNameProp);
  const receivedTextValue = findElementValue(wrapper);
  expectToEqual(receivedTextValue, "Hello Malcolm!");
});
