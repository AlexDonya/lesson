import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const withAuthRedirect = (Component) => {

  function RedirectComponent(props) {
    const navigate = useNavigate();
    useEffect(() => {
      if (!props.isAuth) {
        return navigate('/login');
      }
    }, [navigate, props.isAuth]);

    return <Component {...props} />;
  }

  const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectAuthRedirectComponent;
};

export default withAuthRedirect;