import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import pretty from "pretty";
import Default from "../components/Default";
import { PostProvider } from "../context";

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
    render(
      <BrowserRouter>
        <PostProvider>
          <Default />
        </PostProvider>
      </BrowserRouter>,
      container
    );
  });
  expect(container.innerHTML).toBeDefined();
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
