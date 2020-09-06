import React from "react";
import {} from "@material-ui/core";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import FakeDataDetails from "./components/FakeDataDetails/FakeDataDetails";
import Comment from "./components/Comment/Comment";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/FakeDataDetails/:fakeId">
          <FakeDataDetails />
        </Route>
        <Route path="/Comment/:postId">
          <Comment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
