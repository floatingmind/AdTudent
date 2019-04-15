import React from 'react';
import { Router, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import history from '../history/history';

import AboutUS from '../components/AboutUs';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Search from '../components/Search';
import AdCreate from "../components/Advertisement/AdCreate";
import AdDelete from "../components/Advertisement/AdDelete";
import AdEdit from "../components/Advertisement/AdEdit";
import AdShow from "../components/Advertisement/AdShow";


const AppRouter = () => (
    <Router history={history}>
      <Switch>
        <PublicRoute   exact path="/" component={Main} />
        <PublicRoute   exact path="/aboutus" component={AboutUS} />
        <PublicRoute   exact path="/search" component={Search} />
        <PrivateRoute  exact path="/profile" component={Profile} />
        <PrivateRoute  exact path="/advertisement/new" component={AdCreate} />
        <PrivateRoute  exact path="/advertisement/edit/:id" component={AdEdit} />
        <PrivateRoute  exact path="/advertisement/delete/:id" component={AdDelete} />
        <PrivateRoute  exact path="/advertisement/:id" component={AdShow} />
      </Switch>
  </Router>
);

export default AppRouter;

