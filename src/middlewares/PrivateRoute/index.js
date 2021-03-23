import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isLogged, ...rest }) => {
  return (
    <Route {...rest}>
      {isLogged
        ? children
        : <Redirect to="/login" />
      }
    </Route>
  );
};

export default PrivateRoute;