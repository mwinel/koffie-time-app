import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Newsletter from "../components/NewsLetter";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders newsletter component", () => {
  act(() => {
    render(<Newsletter />, container);
  });
  expect(container.innerHTML).toBeDefined();
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
