import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import Login from './Login';
import Chart from './Chart';
import Websocket from './Websocket';
import Redux from './Redux';

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
        <Route path="/websocket">
          <Websocket />
        </Route>
        <Route path="/redux">
          <Redux />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;
