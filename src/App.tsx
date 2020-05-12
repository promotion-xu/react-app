import React, { Component } from 'react';


import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import HomeStore from './store/home';
import { R } from 'router/index'

import './App.css';




interface Props extends RouteComponentProps {
}

interface MobxProps extends Props {
  homeStore: HomeStore
}

@inject('homeStore')
@observer
class App extends Component<Props> {

  get injected() {
    return this.props as MobxProps
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>切换
            <Link to={'login'}>Loginmaster
            </Link>
            <Link to={'home'}>Homeasfnjk
            </Link>
          </p>
        </header>
        <main className="App-content">
          <R  />
        </main>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props.homeStore.getRandom())
  }
}

export default withRouter(App);
