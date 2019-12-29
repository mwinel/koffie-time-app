import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import NotFound from "../components/NotFound";

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

const location = { pathname: '/notfound' };

it("renders notfound component", () => {
  act(() => {
    render(<NotFound location={location} />, container);
  });
  expect(container.textContent).toBe("404page not foundThe requested URL /notfound was not found.");
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
