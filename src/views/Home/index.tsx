import React from 'react';
import { inject, observer } from 'mobx-react'
import HomeStore from 'store/home';
import {
  RouteComponentProps
} from 'react-router-dom';
import './index.css';

interface IProps extends RouteComponentProps { }

interface MobxProps extends IProps {
  homeStore: HomeStore
}

@inject('homeStore')
@observer
class Home extends React.Component<IProps> {

  get injected() {
    return this.props as MobxProps
  }
  render() {
    return (
      <div className="Home">Home</div>
    )
  }
  componentDidMount() {
    console.log('this.injected.homeStore.getRandom();', this.injected.homeStore.getRandom()) 
  }
}

export default Home;