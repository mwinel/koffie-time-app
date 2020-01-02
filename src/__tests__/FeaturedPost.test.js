import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import FeaturedPost from "../components/featured/FeaturedPost";
import value from "../testHelpers";

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

it("renders featured-post component", () => {
  act(() => {
    render(
      <BrowserRouter>
        <FeaturedPost {...value} />
      </BrowserRouter>,
      container
    );
  });
  expect(container.innerHTML).toBeDefined();
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
