import {fireEvent, render, within} from "@testing-library/react";
import React from "react";
import SelectTestComponent from "./SelectTestComponent";
import "./setupTests";

test("should open select box and select an option", async () => {
  const { getByTestId, getByRole } = render(
    <SelectTestComponent />
  );

  expect(getByTestId("demo-simple-select-helper-value")).toHaveTextContent("Selected option is");
  const selectBtn = getByTestId("demo-simple-select-helper-data-testid");
  fireEvent.mouseDown(selectBtn);

  const listbox = within(getByRole('listbox'));
  fireEvent.click(listbox.getByText(/thirty/i));

  expect(getByTestId("demo-simple-select-helper-value")).toHaveTextContent("Selected option is 30");
});