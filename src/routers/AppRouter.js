import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../history/history';

import App from '../components/app';



const AppRouter = () => (
    <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact component={App}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

