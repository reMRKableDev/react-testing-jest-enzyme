import React from "react";
import { shallow } from "enzyme";
import UserList from "../UserList";

test("shallow rendering of component", () => {
  const fakeUserList = [
    { id: 255, name: "Malcolm Kente", email: "malcolm.kente@remrkabledev.com" },
    { id: 80, name: "Kendrick Lamar", email: "k.dot@compton.com" },
    { id: 444, name: "Shawn Carter", email: "hova@rocnation.com" }
  ];
  const wrapper = shallow(<UserList retrievedUsers={fakeUserList} />);
  expect(wrapper).toMatchSnapshot();
});
