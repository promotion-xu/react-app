import React from 'react';
import './index.less';

class Login extends React.Component {

  state = {
    instance: null
  }

  handleResizeChange() {

  }

  initFruits() {
    this.setState({ instance: new Fruits() })
  }
  handleClickFruits() {}
  handleSetFruitsPosition() {}
  
  componentDidMount() {
    this.initFruits()
    window.addEventListener('resize', this.handleResizeChange)
  }

  componentWillUnmount() {
    this.state.instance?.destory()
  }

  render() {
    return (
      <div className="Login">Login</div>
    )
  }
}

export default Login;