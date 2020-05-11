import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("Checks if the filter field is displayed", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Filter/i);
  expect(linkElement).toBeInTheDocument();
});

test("Checks if the download button is displayed", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Download/i);
  expect(linkElement).toBeInTheDocument();
});

test("Checks if the delete button is displayed", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Delete/i);
  expect(linkElement).toBeInTheDocument();
});
