import React from 'react';
import './index.less';

class Login extends React.Component {

  handleResizeChange() {

  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResizeChange)
  }

  render() {
    return (
      <div className="Login">Login</div>
    )
  }
}

export default Login;