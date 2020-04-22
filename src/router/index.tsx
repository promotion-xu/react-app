
import React, { Suspense } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";

// import Home from '../views/Home';
// import Login from '../views/Login';
import Login from 'views/Login';
import Home from 'views/Home'

export const R = () => {
  return <Switch>
      <Route exact path = "/home" component = { Home } />
      <Route exact path = "/login" component = { Login } />
    </Switch>
}