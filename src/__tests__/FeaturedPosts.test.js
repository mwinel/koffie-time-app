import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import pretty from "pretty";
import FeaturedPosts from "../components/featured/FeaturedPosts";
import { PostProvider } from "../context";
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

it("renders featured-posts component", () => {
  act(() => {
    render(
      <BrowserRouter>
        <PostProvider>
          <FeaturedPosts {...value} />
        </PostProvider>
      </BrowserRouter>,
      container
    );
  });
  expect(container.innerHTML).toBeDefined();
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
