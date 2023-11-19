import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const LoginFrom = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' component='input' type="text" placeholder='Login' />
      </div>
      <div>
        <Field name='password' component='input' type="password" placeholder='Password' />
      </div>
      <div>
        <Field name='rememberMe' component='input' type="checkbox" />Remember me
      </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: 'login', })(LoginFrom);

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isAuth) {
      return navigate('/profile');
    }
  }, [props.isAuth])

  return (
    <>
      <h1>LOGIN</h1>
      <ReduxLoginForm onSubmit={props.onSubmit} />
    </>
  );
};

export default Login;