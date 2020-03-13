import React from "react";
import App from "../App";
import { shallow } from "enzyme";

const shallowComponent = () => shallow(<App />);

test("shallow rendering App component", () => {
  const wrapper = shallowComponent();
  expect(wrapper).toMatchSnapshot();
});

test(".app class exist on element", () => {
  const wrapper = shallowComponent();
  expect(wrapper.find(".app").hasClass("app")).toBe(true);
});

test(".header class exist on element", () => {
  const wrapper = shallowComponent();
  expect(wrapper.find(".header").hasClass("header")).toBe(true);
});

test("Header component isn't null value", () => {
  const wrapper = shallowComponent();
  expect(wrapper.find("Header")).not.toBeNull();
});

test("UserList component isn't null value", () => {
  const wrapper = shallowComponent();
  expect(wrapper.find("UserList")).not.toBeNull();
});
