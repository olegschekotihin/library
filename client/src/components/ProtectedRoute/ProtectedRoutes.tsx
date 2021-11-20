import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { ROUTES_PATH } from '../../const';

interface StateValues {
  users: any;
}

interface PrivateRouteValues {
  path: string;
  component: any;
  loggedIn: boolean;
}

function PrivateRoute(props: PrivateRouteValues) {
  const {
    path,
    loggedIn,
    ...other
  } = props;
  return (
    <Route
      {...other}
      render={({ component }: any) => (loggedIn ? (
        component
      ) : (
        <Redirect
          to={{
            pathname: ROUTES_PATH.LOGIN,
            state: { from: component },
          }}
        />
      ))}
    />
  );
}

const mapStateToProps = (state: StateValues) => ({
  loggedIn: state.users.loggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
