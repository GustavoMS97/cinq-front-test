/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { getUsers } from "../functions/User";

test("Checks if there is at least one user displayed.", async () => {
  const { getByText } = render(<App />);
  const users = await getUsers();
  const pattern1 = users[0].firstName;
  const pattern2 = users[0].lastName;
  const pattern3 = users[0].age;
  const linkElement1 = getByText(new RegExp(pattern1, "ig"));
  const linkElement2 = getByText(new RegExp(pattern2, "ig"));
  const linkElement3 = getByText(new RegExp(pattern3, "ig"));
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});
