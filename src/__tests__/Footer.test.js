import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

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

it("renders footer component", () => {
  act(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      container
    );
  });
  expect(container.innerHTML).toBeDefined();
  expect(container.innerHTML).toContain("Koffie Time");
  expect(container.innerHTML).toContain("Social");
  expect(container.innerHTML).toContain("More");
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
