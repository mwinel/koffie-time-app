import React from "react";
import ReactDOM from "react-dom";
import { PostProvider } from "../context";
import App from "../App";

it("renders app component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PostProvider>
      <App />
    </PostProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
