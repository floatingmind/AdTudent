import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import history from '../history/history';

import Header from '../components/Header';




const AppRouter = () => (
    <Router history={history}>
    <div>
      <Switch>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

