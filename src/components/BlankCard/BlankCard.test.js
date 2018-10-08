import React from "react";
import BlankCard from "./index";
import { shallow } from "enzyme";

it("matches the snapshot", () => {
  const wrapper = shallow(<BlankCard />);
  expect(wrapper).toMatchSnapshot();
});
