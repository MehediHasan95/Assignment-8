import React from "react";
import {} from "@material-ui/core";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import FakeDataDetails from "./components/FakeDataDetails/FakeDataDetails";

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
