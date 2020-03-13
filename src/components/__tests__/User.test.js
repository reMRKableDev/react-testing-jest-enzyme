import React from "react";
import User from "../User";
import { shallow } from "enzyme";

test("shallow renders component with object", () => {
  const fakeUser = {
    id: 255,
    name: "Malcolm Kente",
    email: "malcolm.kente@remrkabledev.com"
  };
  
  const wrapper = shallow(<User user={fakeUser} />);
  expect(wrapper).toMatchSnapshot();
});
