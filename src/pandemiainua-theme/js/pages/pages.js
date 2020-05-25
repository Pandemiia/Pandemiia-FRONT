import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './pages.config';

/** ROUTES **/
import NotFound from './404';

const Pages = ({ isLoggedIn, ...props }) => {
  const getRoutes = useCallback(
    (route, idx) => <Route key={`rout-${idx}-${route.name}`} exact path={route.path} component={route.component} />,
    []
  );

  const getPrivateRoutes = useCallback(
    (route, idx) => {
      return isLoggedIn ? (
        <Route key={`rout-${idx}-${route.name}`} exact path={route.path} component={route.component} />
      ) : (
        <Redirect from={route.path} to="/login" />
      );
    },
    [isLoggedIn]
  );

  const renderRoute = useCallback(props => <NotFound {...props} />, []);

  const publicRoutes = routes.filter(route => route.permission.includes('guest'));
  const privateRoutes = routes.filter(route => route.permission.includes('user'));

  const navPublicRoutes = publicRoutes.map(getRoutes);
  const navPrivateRoutes = privateRoutes.map(getPrivateRoutes);

  return (
    <Switch>
      {navPublicRoutes}
      {navPrivateRoutes}
      <Route render={renderRoute} />
    </Switch>
  );
};

Pages.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Pages;
