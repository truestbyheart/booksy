import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BookDetail from "./Components/Book/Book-detail/BookDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/book/:id">
        <BookDetail />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
