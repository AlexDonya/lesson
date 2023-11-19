import { connect } from 'react-redux';
import React from 'react';
import { logInUser } from '../../redux/auth-reducer';
import Login from './Login';

class LoginContainer extends React.Component {

  handleSubmit = (formData) => {
    this.props.logInUser(formData.login, formData.password, formData.rememberMe);
  }

  render() {
    return (
      <Login isAuth={this.props.isAuth} onSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { logInUser })(LoginContainer);