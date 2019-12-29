import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Default from "./components/Default";
import NotFound from "./components/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
