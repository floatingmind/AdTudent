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
        <PublicRoute path="/" exact component={Main} />
        <PublicRoute path="/AboutUs" component={AboutUS} />
        <PublicRoute path="/Search" component={Search} />
        <PrivateRoute  path="/profile" component={Profile} />
        <PrivateRoute  path="/advertisement/new" exact component={AdCreate} />
        <PrivateRoute  path="/advertisement/edit/:id" exact component={AdEdit} />
        <PrivateRoute  path="/advertisement/delete/:id" exact component={AdDelete} />
        <PrivateRoute  path="/advertisement/:id" exact component={AdShow} />
      </Switch>
  </Router>
);

export default AppRouter;

