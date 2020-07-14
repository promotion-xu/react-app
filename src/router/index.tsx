
import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import Home from '../views/Home';
// import Login from '../views/Login';
import Login from 'views/Login';
import Home from 'views/Home'
import List from 'views/List'

export const R = withRouter(({ location }) => {
  console.log('location', location);
  return (
    <TransitionGroup className={'router-wrapper'}>
      <CSSTransition appear={true} key={location.pathname} timeout={1000} mountOnEnter={true} unmountOnExit={true} classNames={'fade'}>
        <Switch location={location}>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={List} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
})

