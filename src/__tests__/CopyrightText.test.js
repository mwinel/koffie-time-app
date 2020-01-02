import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { BrowserRouter } from "react-router-dom";
import CopyrightText from "../components/CopyrightText";

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

it("renders copyright-text component", () => {
  act(() => {
    render(
      <BrowserRouter>
        <CopyrightText />
      </BrowserRouter>,
      container
    );
  });
  expect(container.innerHTML).toBeDefined();
  expect(container.innerHTML).toContain("© KoffieTime 2019");
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
