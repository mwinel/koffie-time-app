import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./components/Default";
import NotFound from "./components/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Default} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
