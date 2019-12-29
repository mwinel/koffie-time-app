import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Default from "../components/Default";

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

it("renders default component", () => {
  act(() => {
    render(<Default />, container);
  });
  expect(container.textContent).toBe("koffie time app");
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
