import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CopyrightText from "./components/CopyrightText";
import Default from "./components/Default";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import NotFound from "./components/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Default} />
          <Route path="/all" component={Posts} />
          <Route path="/post" component={PostDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <CopyrightText />
      </BrowserRouter>
    </>
  );
}

export default App;
